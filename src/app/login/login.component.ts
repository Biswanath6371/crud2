import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = "loginpage"
  constructor(private http: HttpClient, private router: Router) {}
  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })
  loginform() {
    this.http.get<any>("http://localhost:3000/users")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.login.value.email && a.password === this.login.value.password && (a.admin == false)
      });
      const admin = res.find((a:any)=>{
        return a.email === this.login.value.email && a.password === this.login.value.password && (a.admin == true)
      });
      if(user){
        localStorage.setItem('token',"hfsiuefbeugfwkfabnfukagfakf")
        this.login.reset();
        this.router.navigate(['/dashboard']);
      } else if(admin){
        localStorage.setItem('token',"hfsiuefbeugfwkfabnfukagfakf")
        this.login.reset();
        this.router.navigate(['/dashboardadmin']);
      } else {
        alert("Invalid Credentials !!!");
      }
      }, err=> {
        alert("Something went wrong !!!");
    })
  }
  get email()
  {
    return this.login.get(`email`)
  }
  get password()
  {
    return this.login.get(`password`)
  }
}
