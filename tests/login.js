import { Builder, By, Key } from 'selenium-webdriver';
import { expect, use } from 'chai';
import chaiWebdriver from 'chai-webdriver';
import HomePage from '../pages/homepage';
import RegistrationPage from '../pages/registration';

describe('Zoro scenarios', function () {
        this.timeout(60000);
        var driver;
        var homePage;
        var regPage;

        beforeEach(() => {
            driver = new Builder().forBrowser('chrome').build();
            use(chaiWebdriver(driver));
            homePage = new HomePage(driver);
            regPage = new RegistrationPage(driver);

        });

        // afterEach(() => {
        //     driver.quit();
        // });

        it('Go to Zoro and sign in', async function () {
            // const homePage = await new HomePage(driver);
            await homePage.visit('https://zoro.co.uk');
            await homePage.goToLoginPage();
            await homePage.enterUsername('test150420@gmail.com');
            await homePage.enterPassword('9999999');
            await homePage.loginBtn();


        });

            it('Register', async function () {
                await homePage.visit('https://zoro.co.uk');
                await homePage.goToLoginPage();
                await homePage.registerBtn();
                await regPage.selectTitle();
                await regPage.enterName("Noor");

            });

        });
    
