import { Page } from 'playwright';

export class EAAppRegisterPage {
    private page: Page;

    // Selector strings
    private readonly emailSelector = 'Email';
    private readonly passwordSelector = 'Password';
    private readonly confirmPasswordSelector = 'Confirm password';
    private readonly registerButtonName = 'Register';
    private readonly loginLinkText = 'Log in';
    private readonly titleRole = 'heading';
    private readonly userNameSelector = 'UserName';

    constructor(page: Page) {
        this.page = page;
    }

    get userNameInput() {
        return this.page.getByLabel(this.userNameSelector);
    }

    // Selector functions
    get emailInput() {
        return this.page.getByLabel(this.emailSelector);
    }

    get passwordInput() {
        return this.page.getByRole('textbox', { name: this.passwordSelector, exact: true});
    }

    get confirmPasswordInput() {
    
        return this.page.getByRole('textbox', { name: this.confirmPasswordSelector, exact: true});
    }

    get registerButton() {
        return this.page.getByRole('button', { name: this.registerButtonName });
    }

    get title() {
        return this.page.getByRole(this.titleRole);
    }

    get loginLink() {
        return this.page.getByText(this.loginLinkText);
    }

    async goto() {
        await this.page.goto('/Account/Register');
    }

    // Actions
    async setUserName(name: string) {
        await this.userNameInput.fill(name);
    }
    
    async setEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async setPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async setConfirmPassword(confirmPassword: string) {
        await this.confirmPasswordInput.fill(confirmPassword);
    }

    async clickRegister() {
        await this.registerButton.click();
    }

    async clickLoginLink() {
        await this.loginLink.click();
    }

    async getTitleText() {
        return await this.title.textContent();
    }
}

export default EAAppRegisterPage;
