import { By, Key } from "selenium-webdriver";

export default class HomePage {
    constructor(driver) {
        this.driver = driver;
    }

    async visit(website) {
        await this.driver.get(website);
        return this;
    }

    async findcss(element){
        await this.driver.findElement(By.css(element));
        return this;
    }

    async findclass(element){
        await this.driver.findElement(By.className(element));
        return this;
    }

    async goToLoginPage() {
        await this.driver.findElement(By.className('visible-lg-inline')).click();
        return this;

    }

    async enterUsername(username){
        await this.driver.findElement(By.css('[data-e2e="emailAddress"]')).sendKeys(username);
        return this;
    }

    async enterPassword(password){
        await this.driver.findElement(By.css('[data-e2e="password"]')).sendKeys(password);
        return this;
    }

    async enterPassword(password){
        await this.driver.findElement(By.css('[data-e2e="password"]')).sendKeys(password);
        return this;
    }

    async loginBtn(){
        await this.driver.findElement(By.css('[data-e2e="login"]')).click();
        return this;
    }

    async successLoginMessage(){
        await this.driver.findElement(By.className('Toastify__toast-container Toastify__toast-container--top-right Root_ToastContainer')).getText();
        return this;
    }     
    
    async registerBtn(){
        await this.driver.findElement(By.id('Login.register')).click();
        return this;
    }     
    

    
}