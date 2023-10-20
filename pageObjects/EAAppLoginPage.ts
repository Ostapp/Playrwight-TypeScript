import { Page } from 'playwright';

export class EAAppLoginPage {
    private page: Page;

    // Selector strings
    private readonly loginButtonName = 'Log in';
    private readonly userNameLabel = 'UserName';
    private readonly passwordLabel = 'Password';
    private readonly rememberMeLabel = 'Remember me?';
    private readonly registerLinkText = 'Register as a new user?';
    private readonly forgotPasswordLinkText = 'Forgot your password?';
    private readonly titleRole = 'heading';

    constructor(page: Page) {
        this.page = page;
    }

    // Selector functions
    get userNameInput() {
        return this.page.getByLabel(this.userNameLabel);
    }

    get passwordInput() {
        return this.page.getByLabel(this.passwordLabel);
    }

    get rememberMeCheckbox() {
        return this.page.getByLabel(this.rememberMeLabel);
    }

    get loginButton() {
        return this.page.getByRole('button', { name: this.loginButtonName });
    }

    get registerLink() {
        return this.page.getByText(this.registerLinkText);
    }

    get forgotPasswordLink() {
        return this.page.getByText(this.forgotPasswordLinkText);
    }

    get title() {
        return this.page.getByRole(this.titleRole);
    }

    // Actions

    async goto() {
        await this.page.goto('/Account/Login');
    }

    async setUserName(userName: string) {
        await this.userNameInput.fill(userName);
    }

    async setPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async toggleRememberMe() {
        await this.rememberMeCheckbox.click();
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async clickRegisterLink() {
        await this.registerLink.click();
    }

    async clickForgotPasswordLink() {
        await this.forgotPasswordLink.click();
    }

    async getTitleText() {
        return await this.title.textContent();
    }
}

export default EAAppLoginPage;
