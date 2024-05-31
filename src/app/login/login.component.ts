import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string = '';
  email: string = '';
  pass: string = '';
  emailValid: boolean = false;

  constructor(private router: Router) {}

  onEmailChange(event: any) {
    const inputValue = event.target.value;
    this.emailValid = inputValue.endsWith('@gmail.com') || inputValue.endsWith('@email.com');
    if (this.emailValid) {
      this.clearErrorMessage('กรุณากรอกอีเมลที่ถูกต้อง');
    } else {
      this.setErrorMessage('กรุณากรอกอีเมลที่ถูกต้อง');
    }
  }

  onPassChange(event: any) {
    const inputValue = event.target.value;
    if (inputValue.length >= 8) {
      this.clearErrorMessage('กรุณากรอกรหัสผ่านอย่างน้อย 8 ตัวอักษร');
    } else {
      this.setErrorMessage('กรุณากรอกรหัสผ่านอย่างน้อย 8 ตัวอักษร');
    }
  }

  clearErrorMessage(field: string) {
    if (this.errorMessage.includes(field)) {
      const messages = this.errorMessage.split(', ').filter(msg => msg !== field);
      this.errorMessage = messages.join(', ');
    }
  }

  setErrorMessage(field: string) {
    if (!this.errorMessage.includes(field)) {
      this.errorMessage = this.errorMessage ? `${this.errorMessage}, ${field}` : field;
    }
  }

  loginBtn() {
    let fields = [];

    if (!this.email || !this.emailValid) {
      fields.push('กรุณากรอกอีเมลที่ถูกต้อง');
    }
    if (!this.pass || this.pass.length < 8) {
      fields.push('กรุณากรอกรหัสผ่านอย่างน้อย 8 ตัวอักษร');
    }

    if (fields.length > 0) {
      this.errorMessage = fields.join(', ');
      return;
    }
    this.errorMessage = '';
    localStorage.setItem('email',this.email)
    this.router.navigate(["home"]);
  }
  back() {
    this.router.navigate(['/wel']);
  }
  
}
