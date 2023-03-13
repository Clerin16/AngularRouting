// const puppeteer = require('puppeteer');

// ('Navigation menu works correctly', async () => {
//   // Launch a new browser and create a new page
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // Navigate to the app's home page+
//   await page.goto('http://localhost:4200');

//   // Click on the "Menu" link in the navigation menu
//   await page.click('#menu');

//   // Wait for the page to load and verify that we are on the Menu page
//   // await page.waitForSelector('.menu-page');
//   const url = page.url();
//   if(url.match(/\/Menu$/)){
//     console.log("Pass");
//   }else{
//     console.log("fail")
//   }

//   // expect(url).toContain('/Menu');

//   // Click on the "Contact Us" link in the navigation menu
//   // await page.click('li:nth-child(3)');

//   // Wait for the page to load and verify that we are on the Contact Us page
//   // await page.waitForSelector('.contact-page');
//   // const url = await page.url();
//   // expect(url).toContain('/Contact-us');

//   // Close the browser
//   await browser.close();
// });

const puppeteer = require('puppeteer');
(async () => {
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
   try{await page.goto('http://localhost:4200/');
   await page.setViewport({ width:1100, height:600, })
    // await page.screenshot({path: 'example.png'});   
     await page.click('#menu');
      // await page.screenshot({path: 'example1.png'}); 
         // await page.waitForNavigation({ timeout: 6000 }); 
          // await page.screenshot({path: 'example1.png'});  
        const url1 = page.url();
        if (url1.match(/\/Menu$/)) {
          console.log('Test case 1 passed!');
        } else {
          console.error('Test case 1 failed!');
        }
      }catch(e){
        console.log(e);
        console.log('TESTCASE:test_case1:failure');
      }finally{
        await page.close();
        await browser.close();
      }})();


      (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        try{await page.goto('http://localhost:4200/');
        await page.setViewport({ width:1100, height:600, })
         // await page.screenshot({path: 'example.png'});   
          await page.click('#contact');
           // await page.screenshot({path: 'example1.png'}); 
              // await page.waitForNavigation({ timeout: 6000 }); 
               // await page.screenshot({path: 'example1.png'});  
             const url1 = page.url();
             if (url1.match(/\/Contact-us$/)) {
               console.log('Test case 2 passed!');
             } else {
               console.error('Test case 2 failed!');
             }
           }catch(e){
             console.log(e);
             console.log('TESTCASE:test_case2:failure');
           }finally{
             await page.close();
             await browser.close();
           }})();

           (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            try{await page.goto('http://localhost:4200/');
            await page.setViewport({ width:1100, height:600, })
             // await page.screenshot({path: 'example.png'});   
              await page.click('#home');
               // await page.screenshot({path: 'example1.png'}); 
                 // await page.waitForNavigation({ timeout: 6000 }); 
                  // await page.screenshot({path: 'example1.png'});  
                 const url1 = page.url();
                 if (url1.match(/\/Home$/)) {
                   console.log('Test case 3 passed!');
                 } else {
                   console.error('Test case 3 failed!');
                 }
               }catch(e){
                 console.log(e);
                 console.log('TESTCASE:test_case3:failure');
               }finally{
                 await page.close();
                 await browser.close();
               }})();