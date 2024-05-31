import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { MockService } from '../mock.service';
import { map, catchError ,timeout,} from 'rxjs/operators';
import { of } from 'rxjs';
import * as moment from 'moment-timezone';

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
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: User | undefined;

  constructor(private serviceService: ServiceService, private mockService: MockService) { }

  ngOnInit(): void {
    this.fetchRandomUser();
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

  pushUserData(userData: User): void {
    this.user = userData;
  }

  fetchRandomUser(): void {
    this.serviceService.GetUser().pipe(
      catchError(error => {
        console.error('API error, using mock data', error);
        return this.mockService.getMockUsers().pipe(
          map(mockData => {
            const randomIndex = Math.floor(Math.random() * mockData.results.length);
            return { results: [mockData.results[randomIndex]] };
          })
        );
      })
    ).subscribe(data => {
      const apiUser = data.results[0];
      const userData = this.convertData(apiUser);
      this.pushUserData(userData);
    });
  }
  

  onFetchRandomUser(): void {
    this.fetchRandomUser();
  }
}
