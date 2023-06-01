const page = require('../../page');//some page is required inside our create an order file. If we see the ../../page then it's a relative pass to another file. So this means we draw from the pagename
const helper = require('../../helper')

describe('Create an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        //at every place we ned to use the fill address, we then use the function
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    })

    it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })

    it('should set the address', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    })

    it('should select the Supportive plan', async () => {
        //page.selectSupportivePlan();
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
        //await browser.pause(2000);
    })

    it('should select a payment method', async () => {
    // Select the payment method
        const paymentMethodButton = await $(page.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();
    
    // You can add additional assertions or actions related to the payment method selection if needed
    })

    it('should add a credit card', async () => {
    //await browser.url(`/`);
        const addCardButton = await $(page.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();
        //const addingCardModal = await $(page.CardNumberModal);
        //await addingCardModal.waitForDisplayed();
            // Fill in the card details
        const cardNumberField = await $(page.CardNumberField);
        await cardNumberField.setValue('1234567890123456');
        const cvvField = await $(page.cvvNumberField);
        await cvvField.setValue('123');

        // Simulate losing focus on the CVV field
        await browser.keys('Tab');

        // Wait for the "Link" button to become active/enabled
        const linkButton = await $(page.linkButton);
        await linkButton.waitForEnabled();
        await linkButton.click(); 
   
        const closeCreditCardButton = await $(page.closeCreditCardButton);
        await closeCreditCardButton.waitForDisplayed();
        await closeCreditCardButton.click();
    })
//final lines of code below
        it('should write a message for the driver', async () => {
            const messageField = await $(page.messageFieldSelector);
            await messageField.setValue('Thank_you');
          })
        
          it('should order a Blanket and handkerchiefs', async () => {
            const blanketButton = await $(page.blanketButtonSelector);
            await blanketButton.waitForDisplayed();
            await blanketButton.click();
            const blanketCheckbox = await browser.$(".switch-input");
            const isSelected = await blanketCheckbox.isSelected();
            expect(isSelected).toBe(true);
        })
        
          it('should verify the car search modal appears', async () => {
            const smartButton = await $(page.smartButton);
            //await smartButton.waitForDisplayed();
            await smartButton.click();
            const carSearchModal = await $(page.carSearchModal);
            await carSearchModal.waitForDisplayed();
            await expect(carSearchModal).toBeDisplayed();})
});

//tried to do an await function but that did not work
//await browser.pause(3000);
//            await carSearchModal.waitForDisplayed({ timeout: 5000 });


//so what I am finding out is that the after my credit card code, it doesn't have a transition. It just stops working...


//so line 5 will open a phone number model and line 15 would save the phone. We want 8 of them, utilizing the functionality
//following lines are your added codes while the above are the original
/*describe ('Automated test', () => {
    it('should set the address', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    })
});
//maybe a ; needs to go in the line above?
    it('should select the Supportive plan', async () => {
    await browser.url(`/`);
    const supportivePlanButton = await $(page.supportivePlanButton);
    await supportivePlanButton.waitForDisplayed();
    await supportivePlanButton.click();
  });
//end of automate test for setting and address with a supportive plan

//this marks the start of the automated test for the credit card
describe('Automated Test', () => {
    it('should add a credit card', async () => {
        await browser.url(`/`);
        const addCardButton = await $(page.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();
        const addingCardModal = await $(page.CardNumberModal);
        await addingCardModal.waitForDisplayed();
         // Fill in the card details
    const cardNumberField = await $(page.CardNumberField);
    const expirationDateField = await $(page.expirationDateField);
    const cvvField = await $(page.cvvNumberField);

    await cardNumberField.setValue('1234567890123456');
    await expirationDateField.setValue('12/24');
    await cvvField.setValue('123');

    // Simulate losing focus on the CVV field
    await browser.keys('Tab');

    // Wait for the "Link" button to become active/enabled
    const linkButton = await $(page.linkButton);
    await linkButton.waitForEnabled();

    // Click on the "Link" button to add the credit card
    await linkButton.click();
  });
});*/
//notes for5/24/2023: welp, the above was not inputted at all...