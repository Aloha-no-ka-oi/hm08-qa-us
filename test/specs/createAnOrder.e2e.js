const page = require('../../page');//some page is required inside our create an order file. If we see the ../../page then it's a relative pass to another file. So this means we draw from the pagename
const helper = require('../../helper')

describe('Create an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
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
        const fromField = await $(page.fromField);
        const toField = await $(page.toField);
        const expectedFromAddress = 'East 2nd Street, 601';
        const expectedToAddress = '1300 1st St';
        const actualFromAddress = await fromField.getValue();
        const actualToAddress = await toField.getValue();
        expect(actualFromAddress).toEqual(expectedFromAddress);
        expect(actualToAddress).toEqual(expectedToAddress);
    })

    it('should select the Supportive plan', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        await page.selectSupportButton();
        const supportivePlanButton = await $(page.supportivePlanButton);
        const isSupportivePlanSelected = await supportivePlanButton.isExisting();
        expect(isSupportivePlanSelected).toBe(true);

    })

    it('should add a credit card', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        const paymentMethodButton = await $(page.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();
        const addCardButton = await $(page.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();
        const cardNumberField = await $(page.CardNumberField);
        await cardNumberField.setValue('1234567890123456');
        const cvvField = await $(page.cvvNumberField);
        await cvvField.setValue('123');
        await browser.keys('Tab');
        const linkButton = await $(page.linkButton);
        await linkButton.waitForEnabled();
        await linkButton.click(); 
        const closeCreditCardButton = await $(page.closeCreditCardButton);
        await closeCreditCardButton.waitForDisplayed();
        await closeCreditCardButton.click();
        const creditCardClosed = await $(closeCreditCardButton).isExisting();
        expect(creditCardClosed).toBe(true);
    })
        it('should write a message for the driver', async () => {
            await browser.url(`/`)
            await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
            const phoneNumber = helper.getPhoneNumber("+1");
            await page.submitPhoneNumber(phoneNumber);
            await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
            const paymentMethodButton = await $(page.paymentMethodButton);
            await paymentMethodButton.waitForDisplayed();
            await paymentMethodButton.click();
            const addCardButton = await $(page.addCardButton);
            await addCardButton.waitForDisplayed();
            await addCardButton.click();
            const cardNumberField = await $(page.CardNumberField);
            await cardNumberField.setValue('1234567890123456');
            const cvvField = await $(page.cvvNumberField);
            await cvvField.setValue('123');
            await browser.keys('Tab');
            const linkButton = await $(page.linkButton);
            await linkButton.waitForEnabled();
            await linkButton.click(); 
            const closeCreditCardButton = await $(page.closeCreditCardButton);
            await closeCreditCardButton.waitForDisplayed();
            await closeCreditCardButton.click();
            const creditCardClosed = await $(closeCreditCardButton).isExisting();
            expect(creditCardClosed).toBe(true);
            const messageField = await $(page.messageFieldSelector);
            await messageField.setValue('Thank_you');
            const isMessageFieldPopulated = await messageField.isExisting();
            expect(isMessageFieldPopulated).toBe(true);
          })
        
          it('should order a Blanket and handkerchiefs', async () => {
            await browser.url(`/`)
            await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
            const phoneNumber = helper.getPhoneNumber("+1");
            await page.submitPhoneNumber(phoneNumber);
            await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
            await page.selectSupportButton();
            const paymentMethodButton = await $(page.paymentMethodButton);
            await paymentMethodButton.waitForDisplayed();
            await paymentMethodButton.click();
            const addCardButton = await $(page.addCardButton);
            await addCardButton.waitForDisplayed();
            await addCardButton.click();
            const cardNumberField = await $(page.CardNumberField);
            await cardNumberField.setValue('1234567890123456');
            const cvvField = await $(page.cvvNumberField);
            await cvvField.setValue('123');
            await browser.keys('Tab');
            const linkButton = await $(page.linkButton);
            await linkButton.waitForEnabled();
            await linkButton.click(); 
            const closeCreditCardButton = await $(page.closeCreditCardButton);
            await closeCreditCardButton.waitForDisplayed();
            await closeCreditCardButton.click();
            const creditCardClosed = await $(closeCreditCardButton).isExisting();
            expect(creditCardClosed).toBe(true);
            const messageField = await $(page.messageFieldSelector);
            await messageField.setValue('Thank_you');
            const isMessageFieldPopulated = await messageField.isExisting();
            expect(isMessageFieldPopulated).toBe(true);
            const blanketButton = await $(page.blanketButtonSelector);
            await blanketButton.waitForDisplayed();
            await blanketButton.click();
            const blanketCheckbox = await browser.$(".switch-input");
            const isSelected = await blanketCheckbox.isSelected();
            expect(isSelected).toBe(true);
        })
        
          it('should verify the car search modal appears', async () => {
           await browser.url(`/`)
            await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
            const phoneNumber = helper.getPhoneNumber("+1");
            await page.submitPhoneNumber(phoneNumber);
            await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
            await page.selectSupportButton();
            const supportivePlanButton = await $(page.supportivePlanButton);
            const isSupportivePlanSelected = await supportivePlanButton.isExisting();
            expect(isSupportivePlanSelected).toBe(true);
            const paymentMethodButton = await $(page.paymentMethodButton);
            await paymentMethodButton.waitForDisplayed();
            await paymentMethodButton.click();
            const addCardButton = await $(page.addCardButton);
            await addCardButton.waitForDisplayed();
            await addCardButton.click();
            const cardNumberField = await $(page.CardNumberField);
            await cardNumberField.setValue('1234567890123456');
            const cvvField = await $(page.cvvNumberField);
            await cvvField.setValue('123');
            await browser.keys('Tab');
            const linkButton = await $(page.linkButton);
            await linkButton.waitForEnabled();
            await linkButton.click(); 
            const closeCreditCardButton = await $(page.closeCreditCardButton);
            await closeCreditCardButton.waitForDisplayed();
            await closeCreditCardButton.click();
            const creditCardClosed = await $(closeCreditCardButton).isExisting();
            expect(creditCardClosed).toBe(true);
            const messageField = await $(page.messageFieldSelector);
            await messageField.setValue('Thank_you');
            const isMessageFieldPopulated = await messageField.isExisting();
            expect(isMessageFieldPopulated).toBe(true);
            const blanketButton = await $(page.blanketButtonSelector);
            await blanketButton.waitForDisplayed();
            await blanketButton.click();
            const blanketCheckbox = await browser.$(".switch-input");
            const isSelected = await blanketCheckbox.isSelected();
            expect(isSelected).toBe(true);


            const smartButton = await $(page.smartButton);
            await smartButton.click();
            const carSearchModal = await $(page.carSearchModal);
            await carSearchModal.waitForDisplayed();
            await expect(carSearchModal).toBeDisplayed();})
          });

