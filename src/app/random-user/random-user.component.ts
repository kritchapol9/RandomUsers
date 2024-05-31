import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent  {
 
  constructor(private serviceService: ServiceService, private router: Router) { }
  back(){
    this.router.navigate(['/home']);
  }
}
