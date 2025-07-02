import { expect } from "chai";  

describe("API Demo Testing", () =>  {
    // Test case
it ('Input Nama dan password', async ()=>{
    // Menu app
    const menuApp = await $('~App');
    // validasi elemen yang di cari ada
    const menuAppAda = await menuApp.isDisplayed();
    expect(menuAppAda).to.be.true;
    console.log('✅ Elemen yang dicari ada');
    await menuApp.click();

    // Menu Alert Dialogs
    const menuAlertDialogs = await $('~Alert Dialogs');
     // validasi elemen yang di cari ada
    const menualertAda = await menuAlertDialogs.isDisplayed();
    expect(menualertAda).to.be.true;
    console.log('✅ Elemen yang dicari ada');
    await menuAlertDialogs.click();

    //  Menu Text Entry Dialog
    const menuTextEntry = await $('~Text Entry dialog');
     // validasi elemen yang di cari ada
    const menuTextAda = await menuTextEntry.isDisplayed();
    expect(menuTextAda).to.be.true;
    console.log('✅ Elemen yang dicari ada');
    await menuTextEntry.click();
    
    // Input Name
    const inputName = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]');
    const inputPass = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]');
    await inputName.setValue('Irma Surynai');
    await browser.pause(2000);
    await inputPass.setValue('DigitalSkolaBatch10');
    await browser.pause(2000);

    // button ok
    const ButtonOk = await $('//android.widget.Button[@resource-id="android:id/button1"]');
    await ButtonOk.click();
    await browser.pause(2000);

    // tutup aplikasi
    await driver.terminateApp('io.appium.android.apis');
    
})

})