import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  private mockData: any;

  constructor() {
    this.mockData = {
      results: [
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "David",
            last: "Williams"
          },
          location: {
            street: {
              number: 3456,
              name: "Cedar St"
            },
            city: "Phoenix",
            state: "Arizona",
            country: "United States",
            postcode: "85001",
            coordinates: {
              latitude: "33.4484",
              longitude: "-112.0740"
            },
            timezone: {
              offset: "-7:00",
              description: "Mountain Time (US & Canada)"
            }
          },
          email: "david.williams@example.com",
          login: {
            uuid: "f1g2h3i4-j5k6-7890-abcd-ef0123456789",
            username: "davidw",
            password: "qwerty123",
            salt: "sld1yGtd",
            md5: "ab54ac4c0be9480ae8fa5e9e2a5196a3",
            sha1: "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
            sha256: "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
          },
          dob: {
            date: "1970-02-15T15:13:16.688Z",
            age: 54
          },
          registered: {
            date: "1990-08-30T05:51:59.390Z",
            age: 33
          },
          phone: "(602) 555-6789",
          cell: "(480) 555-6789",
          id: {
            name: "SSN",
            value: "987-65-4321"
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/45.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/45.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/45.jpg"
          },
          nat: "US"
        },
        {
          gender: "female",
          name: {
            title: "Mrs",
            first: "Olivia",
            last: "Brown"
          },
          location: {
            street: {
              number: 4567,
              name: "Maple St"
            },
            city: "Chicago",
            state: "Illinois",
            country: "United States",
            postcode: "60601",
            coordinates: {
              latitude: "41.8781",
              longitude: "-87.6298"
            },
            timezone: {
              offset: "-6:00",
              description: "Central Time (US & Canada)"
            }
          },
          email: "olivia.brown@example.com",
          login: {
            uuid: "g1h2i3j4-k5l6-7890-abcd-ef0123456789",
            username: "oliviab",
            password: "asdfgh123",
            salt: "sld1yGtd",
            md5: "ab54ac4c0be9480ae8fa5e9e2a5196a3",
            sha1: "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
            sha256: "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
          },
          dob: {
            date: "1982-06-20T15:13:16.688Z",
            age: 41
          },
          registered: {
            date: "2001-09-11T05:51:59.390Z",
            age: 23
          },
          phone: "(312) 555-7890",
          cell: "(773) 555-7890",
          id: {
            name: "SSN",
            value: "678-90-1234"
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/85.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/85.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/85.jpg"
          },
          nat: "US"
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Christopher",
            last: "Martinez"
          },
          location: {
            street: {
              number: 6789,
              name: "Pineapple St"
            },
            city: "San Francisco",
            state: "California",
            country: "United States",
            postcode: "94101",
            coordinates: {
              latitude: "37.7749",
              longitude: "-122.4194"
            },
            timezone: {
              offset: "-8:00",
              description: "Pacific Time (US & Canada)"
            }
          },
          email: "christopher.martinez@example.com",
          login: {
            uuid: "h1i2j3k4-l5m6-7890-abcd-ef0123456789",
            username: "chrism",
            password: "password123",
            salt: "sld1yGtd",
            md5: "ab54ac4c0be9480ae8fa5e9e2a5196a3",
            sha1: "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
            sha256: "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
          },
          dob: {
            date: "1978-08-10T15:13:16.688Z",
            age: 45
          },
          registered: {
            date: "2000-12-25T05:51:59.390Z",
            age: 23
          },
          phone: "(415) 555-1234",
          cell: "(650) 555-1234",
          id: {
            name: "SSN",
            value: "234-56-7890"
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/55.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/55.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/55.jpg"
          },
          nat: "US"
        },
        {
          gender: "female",
          name: {
            title: "Miss",
            first: "Sophia",
            last: "Taylor"
          },
          location: {
            street: {
              number: 7890,
              name: "Peach St"
            },
            city: "Miami",
            state: "Florida",
            country: "United States",
            postcode: "33101",
            coordinates: {
              latitude: "25.7617",
              longitude: "-80.1918"
            },
            timezone: {
              offset: "-5:00",
              description: "Eastern Time (US & Canada)"
            }
          },
          email: "sophia.taylor@example.com",
          login: {
            uuid: "i1j2k3l4-m5n6-7890-abcd-ef0123456789",
            username: "sophiet",
            password: "zxcvbn123",
            salt: "sld1yGtd",
            md5: "ab54ac4c0be9480ae8fa5e9e2a5196a3",
            sha1: "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
            sha256: "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
          },
          dob: {
            date: "2000-11-25T15:13:16.688Z",
            age: 23
          },
          registered: {
            date: "2018-01-01T05:51:59.390Z",
            age: 6
          },
          phone: "(305) 555-9876",
            cell: "(786) 555-9876",
            id: {
            name: "SSN",
            value: "567-89-0123"
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/45.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/45.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/45.jpg"
          },
          nat: "US"
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "James",
            last: "Anderson"
          },
          location: {
            street: {
              number: 8901,
              name: "Apple St"
            },
            city: "Dallas",
            state: "Texas",
            country: "United States",
            postcode: "75201",
            coordinates: {
              latitude: "32.7767",
              longitude: "-96.7970"
            },
            timezone: {
              offset: "-6:00",
              description: "Central Time (US & Canada)"
            }
          },
          email: "james.anderson@example.com",
          login: {
            uuid: "j1k2l3m4-n5o6-7890-abcd-ef0123456789",
            username: "jamesa",
            password: "asdfgh123",
            salt: "sld1yGtd",
            md5: "ab54ac4c0be9480ae8fa5e9e2a5196a3",
            sha1: "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
            sha256: "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
          },
          dob: {
            date: "1988-03-25T15:13:16.688Z",
            age: 36
          },
          registered: {
            date: "2010-05-15T05:51:59.390Z",
            age: 14
          },
          phone: "(214) 555-6543",
          cell: "(469) 555-6543",
          id: {
            name: "SSN",
            value: "890-12-3456"
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/35.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/35.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/35.jpg"
          },
          nat: "US"
        },
        {
          gender: "female",
          name: {
            title: "Miss",
            first: "Isabella",
            last: "Moore"
          },
          location: {
            street: {
              number: 9012,
              name: "Cherry St"
            },
            city: "Seattle",
            state: "Washington",
            country: "United States",
            postcode: "98101",
            coordinates: {
              latitude: "47.6062",
              longitude: "-122.3321"
            },
            timezone: {
              offset: "-8:00",
              description: "Pacific Time (US & Canada)"
            }
          },
          email: "isabella.moore@example.com",
          login: {
            uuid: "k1l2m3n4-o5p6-7890-abcd-ef0123456789",
            username: "isabellam",
            password: "password123",
            salt: "sld1yGtd",
            md5: "ab54ac4c0be9480ae8fa5e9e2a5196a3",
            sha1: "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
            sha256: "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
          },
          dob: {
            date: "1998-12-15T15:13:16.688Z",
            age: 25
          },
          registered: {
            date: "2019-03-10T05:51:59.390Z",
            age: 5
          },
          phone: "(206) 555-6789",
          cell: "(425) 555-6789",
          id: {
            name: "SSN",
            value: "123-45-6789"
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/25.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/25.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg"
          },
          nat: "US"
        }
      ]
    };
  }

  getMockUsers(): Observable<any> {
    return of(this.mockData);
  }
}
