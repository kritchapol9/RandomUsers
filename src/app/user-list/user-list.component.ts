import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { MockService } from '../mock.service';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as moment from 'moment-timezone';
import { Router } from '@angular/router';

export interface User {
  title: string;
  firstName: string;
  lastName: string;
  gender: string;
  city: string;
  state: string;
  country: string;
  postcode: string;
  email: string;
  phone: string;
  picture: string;
  cell: string;
  dob: string;
  age: number;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private serviceService: ServiceService,
    private mockService: MockService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  convertData(apiUser: any): User {
    return {
      title: apiUser.name.title || '-',
      firstName: apiUser.name.first || '-',
      lastName: apiUser.name.last || '-',
      gender: apiUser.gender || '-',
      city: apiUser.location.city || '-',
      state: apiUser.location.state || '-',
      country: apiUser.location.country || '-',
      postcode: apiUser.location.postcode || '-',
      email: apiUser.email || '-',
      phone: apiUser.phone || '-',
      picture: apiUser.picture.large || '-',
      cell: apiUser.cell || '-',
      dob: this.convertDate(apiUser.dob.date) || '-',
      age: apiUser.dob.age || '-'
    };
  }

  convertDate(dateString: string): string {
    const formattedDate = moment(dateString).format('DD/MM/YYYY');
    return formattedDate !== 'Invalid date' ? formattedDate : '-';
  }

  fetchUsers(): void {
    console.log('Fetching users from API...');
    this.serviceService.GetUsers(100).pipe(
      catchError(apiError => {
        console.error('API error, using mock data', apiError);
        return this.mockService.getMockUsers().pipe(
          map(mockData => {
            console.log('Using mock data:', mockData);
            return mockData;
          })
        );
      })
    ).subscribe(data => {
      console.log('Fetched data:', data);
      this.users = data.results.map((apiUser: any) => this.convertData(apiUser));
    });
  }

  back(): void {
    this.router.navigate(['/home']);
  }
}
