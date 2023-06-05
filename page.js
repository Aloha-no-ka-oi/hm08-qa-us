module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    CardNumberField:'#number',
    cvvNumberField: '.card-second-row #code',
    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    supportivePlanButton: 'div=Supportive',
    paymentMethodButton: /*'div class=pp-button filled',*//*$('[alt="Supportive"}'),*/ /*'div=Payment method',*/ /*'//div[@class="pp-text"]'*/'.pp-text=Payment method', 
    addCardButton: 'div=Add card',//'selector for the "Add Card" button',
    linkButton: 'button=Link',

    //final steps below
    smartButton: '.smart-button',
    closeCreditCardButton: '.payment-picker .section.active .close-button'/*'button=Close Credit Card'*/,
    messageFieldSelector: '#comment',
    blanketButtonSelector: '.switch',
    stateChangeElementSelector: '.state-change-element',
    //the above for alt = supportive comes directly from the webpage but it completely breaks my code.
    // Modals
    phoneNumberModal: '.modal',
    CardNumberModal: ' .modal',
    //final modal below
    carSearchModal: '.order-body',
    // Functions--which elements we have on the webpage and which actions we will do
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from); //wait for the from field and then set a value. Imagine the system waits for the from field and to field.
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },
    selectSupportButton: async function () {
        const supportivePlanButton = await $(this.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
    }

};