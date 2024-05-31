import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-wel',
  templateUrl: './wel.component.html',
  styleUrls: ['./wel.component.css']
})
export class WelComponent {
  constructor(private router: Router) { }
 
  regis(){
    this.router.navigate(['/reg']);
  }
  login(){
    this.router.navigate(['/log']);
  }
 }
