import { Page } from 'playwright';

export class EAAppHomePage {
    private page: Page;

    // Selector strings as private readonly properties
    private readonly visitNowLinkSelector = 'Visit now »';
    private readonly learnMoreLinkSelector = 'Learn more »';
    private readonly udemyLinkSelector = 'Udemy';
    private readonly youtubeLinkSelector = 'YouTube';
    private readonly getSourceCodeLinkSelector = 'Get Source code »';
    private readonly titleRoleSelector = 'heading';
    private readonly loginLinkSelector = 'Login';
    private readonly registerLinkSelector = 'Register';
    private readonly homeLinkSelector = 'Home';
    private readonly aboutLinkSelector = 'About';
    private readonly employeeListLinkSelector = 'Employee List';

    constructor(page: Page) {
        this.page = page;
    }

    // Selectors
    get visitNowLink() {
        return this.page.getByText(this.visitNowLinkSelector);
    }

    get learnMoreLink() {
        return this.page.getByText(this.learnMoreLinkSelector);
    }

    get udemyLink() {
        return this.page.getByText(this.udemyLinkSelector);
    }

    get youtubeLink() {
        return this.page.getByText(this.youtubeLinkSelector);
    }

    get getSourceCodeLink() {
        return this.page.getByText(this.getSourceCodeLinkSelector);
    }

    get title() {
        return this.page.getByRole(this.titleRoleSelector);
    }

    get loginLink() {
        return this.page.getByText(this.loginLinkSelector);
    }

    get registerLink() {
        return this.page.getByText(this.registerLinkSelector);
    }

    get homeLink() {
        return this.page.getByText(this.homeLinkSelector);
    }

    get aboutLink() {
        return this.page.getByText(this.aboutLinkSelector);
    }

    get employeeListLink() {
        return this.page.getByText(this.employeeListLinkSelector);
    }

    // Actions
    async goto() {
        await this.page.goto('/');
    }
    
    async clickVisitNow() {
        await this.visitNowLink.click();
    }

    async clickLearnMore() {
        await this.learnMoreLink.click();
    }

    async clickUdemy() {
        await this.udemyLink.click();
    }

    async clickYouTube() {
        await this.youtubeLink.click();
    }

    async clickGetSourceCode() {
        await this.getSourceCodeLink.click();
    }

    async clickLogin() {
        await this.loginLink.click();
    }

    async clickRegister() {
        await this.registerLink.click();
    }

    async clickHome() {
        await this.homeLink.click();
    }

    async clickAbout() {
        await this.aboutLink.click();
    }

    async clickEmployeeList() {
        await this.employeeListLink.click();
    }

    async getTitleText() {
        return await this.title.textContent();
    }
}

export default EAAppHomePage;
