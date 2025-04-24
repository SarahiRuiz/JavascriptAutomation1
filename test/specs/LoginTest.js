//To run script: npx wdio run ./wdio.conf.cjs
//Test Suite Name, all the test cases
describe('Test Suite Name', async function()
    {
        //test case name, steps test
        xit ('Login Fail Page', async function()//webdriverIO Async
        {
            // I want Sync so I add await to do it Sync
            await browser.url("https://rahulshettyacademy.com/loginpagePractise/")

            browser.pause(3000)
            console.log(await browser.getTitle())
            
            //asserts => expect
            //await expect(browser).toHaveTitle(expect(browser).toHaveTitleContaining("Academy"))
            await expect(browser).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")

            //ways to fill email
            await $("input[name='username']").setValue("test@test.com")
            await browser.pause(3000)
            await $("#username").setValue("test2@test2.com")

            //filling passwords
            const password = $("//input[@type='password']")
            await password.setValue("Learning")
            
            //clicking button of login
            await $("#signInBtn").click()

            //error message
                //Dinamic wait
            browser.waitUntil(async ()=>await $("#signInBtn").getAttribute('value') == 'Sign In',
            {
                timeout : 30000,
                timeOutMsg : 'Not showing to Sign In'
            })
            await console.log(await $(".alert-danger"))//css class
            const bottomText = await $("p")
            await expect(bottomText).toHaveText("(username is rahulshettyacademy and Password is learning)")
        }),


        it ('Login Success', async()=>//annonimous functions
        {
            await browser.url("https://rahulshettyacademy.com/loginpagePractise/")

            browser.pause(3000)
            console.log(await browser.getTitle())
            
            await expect(browser).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")

            //ways to fill email
            await $("input[name='username']").setValue("rahulshettyacademy")

            //filling passwords
            const password = $("//input[@type='password']")
            await password.setValue("learning")
            
            //Radio Button
                //by many elements
            const radioButtons = await $$(".radiotextsty")
            const userRadioButton = radioButtons[1];
            await userRadioButton.click()
            await browser.pause(4000)

            //pop up displayed
            const PopUpMessage = $("//p[text()='You will be limited to only fewer functionalities of the app. Proceed?']")
            await PopUpMessage.waitForExist()

            //click cancel button
            const CancelButton = await $("#cancelBtn")
            await CancelButton.click()

                //by child
            const radioButtonsSecond = await $$(".customradio")
            const radioButtonsAdmin = radioButtonsSecond[0].$("span");
            await radioButtonsAdmin.click()
            await browser.pause(4000)
            console.log("Verify Admin Radio Button is selected "+radioButtonsAdmin.isSelected())

            //clicking button of login
            await $("#signInBtn").click()

            await $(".btn-primary").waitForExist()
            await expect(browser).toHaveUrl("https://rahulshettyacademy.com/angularpractice/shop")

        })
    }
)