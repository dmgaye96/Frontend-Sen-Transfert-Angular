import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeadersuperadminComponent } from './headersuperadmin/headersuperadmin.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';




const appRoutes: Routes = [
  { path: 'auth/signup', component:  SignupComponent },
  { path: 'auth/signin', component:  SigninComponent},
  { path: 'headersuperadmin' , canActivate: [AuthGuardService], component: HeadersuperadminComponent },
  { path: 'register',  canActivate: [AuthGuardService], component : RegisterComponent },
  { path: '' , redirectTo : 'auth/signin', pathMatch: 'full'},
  { path: '**' , redirectTo : 'auth/signin'}

];
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HeadersuperadminComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
