import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private validEmail: string = 'kritchapol1301@gmail.com';
  constructor(private router: Router) {}
  back() {
    localStorage.clear();
    
    this.router.navigate(['/wel']);
  }
  random() {
    let token = localStorage.getItem('email');
    if (token && token === this.validEmail) {
      this.router.navigate(['/random']);
    } else {
      alert('คุณไม่มีสิทธิ์เข้าถึงเส้นทางนี้');
    }
  }
  user() {
    let token = localStorage.getItem('email');
    if (token && token === this.validEmail) {
      this.router.navigate(['/user']);
    } else {
      alert('คุณไม่มีสิทธิ์เข้าถึงเส้นทางนี้');
    }
}
}
