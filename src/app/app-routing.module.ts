import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomUserComponent} from './random-user/random-user.component';
import { ReComponent } from './re/re.component';
import { WelComponent } from './wel/wel.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
const routes: Routes = [
  {path : 'random',component :RandomUserComponent},
  {path : 'reg',component:ReComponent},
  {path : 'wel',component:WelComponent},
  {path : 'log',component : LoginComponent},
  {path : 'home',component : HomeComponent},
  {path : 'user',component:UserListComponent},
  {path:'',redirectTo:'wel',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
