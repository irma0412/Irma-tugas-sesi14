import { expect } from 'chai';

// nama Test Suite
describe('API Demo Testing', () => {

    // Test case open apk
    it('coba test buka aplikasinya', async () => {
        console.log('✅ Aplikasi terbuka');
        await browser.pause(2000); // Jeda 2 detik

    });
    
    // Test case klik menu views
    it('Buka menu views', async () => {        
        const ButtonViews = await $('~Views');
        await ButtonViews.click();
        console.log('✅ Button Views terbuka');
        await browser.pause(1000); // Jeda 1 detik
        
    });

     // Test case klik menu animation
    it('Buka menu animation', async () => {        
        const ButtonAnimation = await $('~Animation');
        await ButtonAnimation.click();
        console.log('✅ Button Animation terbuka');
        await browser.pause(1000); // Jeda 1 detik
        
    });
     // Test case klik menu 3D Transition
    it('Buka menu 3D Transition', async () => {        
        const Button3D = await $('~3D Transition');
        await Button3D.click();
        console.log('✅ Button 3D Animation terbuka');
        
    });
    // Test case klik lyon
    it('Buka animation lyon', async () => {        
        const Buttonlyon = await $('//android.widget.TextView[@resource-id="android:id/text1" and @text="Lyon"]');
        await Buttonlyon.click();
        console.log('✅ Button lyon terbuka');
        
    });

});
