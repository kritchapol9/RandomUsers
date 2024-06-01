import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RandomUserComponent } from './random-user/random-user.component';
import { ServiceService } from './service.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReComponent } from './re/re.component';
import { WelComponent } from './wel/wel.component';
import { LoginComponent } from './login/login.component';
import { UserCardComponent } from './user-card/user-card.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { ApiInterceptor } from './interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RandomUserComponent,
    ReComponent,
    WelComponent,
    LoginComponent,
    UserCardComponent,
    HomeComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    ServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
