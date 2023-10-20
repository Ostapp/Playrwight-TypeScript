import { Page } from 'playwright';

export class EAAppEmployeePage {
    private page: Page;

    // Selector strings
    private readonly createNewLinkText = 'Create New';
    private readonly backToListLinkText = 'Back to List';
    private readonly titleRole = 'heading';
    private readonly tableRole = 'table';

    constructor(page: Page) {
        this.page = page;
    }

    // Selector functions
    get createNewLink() {
        return this.page.getByText(this.createNewLinkText);
    }

    get backToListLink() {
        return this.page.getByText(this.backToListLinkText);
    }

    get title() {
        return this.page.getByRole(this.titleRole);
    }

    get employeeTable() {
        return this.page.getByRole(this.tableRole);
    }

    // For Benefits, Edit, Delete links based on user's position in the list
    benefitsLinkForRow(row: number) {
        return this.employeeTable.locator(`tbody tr:nth-child(${row}) td:nth-child(6) a`);
    }

    editLinkForRow(row: number) {
        return this.employeeTable.locator(`tbody tr:nth-child(${row}) td:nth-child(7) a`);
    }

    deleteLinkForRow(row: number) {
        return this.employeeTable.locator(`tbody tr:nth-child(${row}) td:nth-child(8) a`);
    }

    employeeNameForRow(row: number) {
        return this.employeeTable.locator(`tbody tr:nth-child(${row}) td:nth-child(1)`);
    }

    employeeEmailForRow(row: number) {
        return this.employeeTable.locator(`tbody tr:nth-child(${row}) td:nth-child(2)`);
    }

    // Actions
    async clickCreateNew() {
        await this.createNewLink.click();
    }

    async clickBackToList() {
        await this.backToListLink.click();
    }

    async clickBenefitsForRow(row: number) {
        await this.benefitsLinkForRow(row).click();
    }

    async clickEditForRow(row: number) {
        await this.editLinkForRow(row).click();
    }

    async clickDeleteForRow(row: number) {
        await this.deleteLinkForRow(row).click();
    }

    async getEmployeeNameForRow(row: number) {
        return await this.employeeNameForRow(row).textContent();
    }

    async getEmployeeEmailForRow(row: number) {
        return await this.employeeEmailForRow(row).textContent();
    }

    async getTitleText() {
        return await this.title.textContent();
    }

    // Function to get user row by his name and/or email
    async getRowByEmployeeDetails(name?: string, email?: string): Promise<number | null> {
        const rows = this.employeeTable.locator('tbody tr');
        const rowCount = await rows.count();

        for (let i = 1; i <= rowCount; i++) {
            const rowName = await rows.nth(i - 1).locator('td:nth-child(1)').textContent();
            const rowEmail = await rows.nth(i - 1).locator('td:nth-child(2)').textContent();
            if ((name && rowName === name) || (email && rowEmail === email)) {
                return i; // Return the row number (1-indexed)
            }
        }
        return null; // Return null if no matching row is found
    }
}

export default EAAppEmployeePage;
