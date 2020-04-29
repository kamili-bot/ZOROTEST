import { By, Key } from "selenium-webdriver";

export default class RegistrationPage {
    constructor(driver) {
        this.driver = driver;
    }

    async selectTitle() {
        await this.driver.findElement(By.css('div.wrapper div.content div.Root div.container:nth-child(4) div.RegistrationScreen div.row div.RegistrationForm:nth-child(2) div.col-md-8.col-md-offset-2 div.row:nth-child(1) div.col-md-8.col-md-offset-2 div.row div:nth-child(2) div.col-md-8 div.form-group select.form-control > option:nth-child(2)')).click();
        return this;
    }

    async enterName(name) {
        await this.driver.switchTo().frame(0);
        await this.driver.findElement(By.xpath("//input[@id='firstName']")).sendKeys(name);
        return this;
    }
}     