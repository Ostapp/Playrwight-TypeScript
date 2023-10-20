import { faker } from '@faker-js/faker';

export class NewUser {
  private _email: string;
  private _userName: string;
  private _password: string;

  constructor() {
    this.generateRandomValues();
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    if (this.isValidEmail(value)) {
        this._email = value;
    } else {
      throw new Error('Email is not valid.');
    }
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    if (value.length <= 6) {
      this._userName = value;
    } else {
      throw new Error('Username must not be longer than 6 characters.');
    }
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    if (
      value.length >= 6 &&
      /[A-Z]/.test(value) &&
      /[a-z]/.test(value) &&
      /[0-9]/.test(value) &&
      /[!@#$%^&*]/.test(value)
    ) {
      this._password = value;
    } else {
      throw new Error(
        'Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.'
      );
    }
  }

  private async generateRandomValues() {
    this._email = await this.generateRandomEmail();
    this._userName = await this.generateRandomUserName();
    this._password = await this.generatePassword();
  }

  private async generateRandomEmail() {
    return await faker.internet.email();
  }

  private async generateRandomUserName(maxLength: number = 6) {
    let name = faker.name.firstName();
    while (name.length > maxLength) {
        name = faker.name.firstName();
    }
    return name;
}

  private async generatePassword() {
    return 'Random123!';
  }

  private isValidEmail(email: string) : boolean {
    const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}
}
export default NewUser;