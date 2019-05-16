import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  user:User = new User();
  error: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  login(): void{
    this.authService.login(this.user).subscribe(
      (response:any)=>{
        console.log(response);
        if(response.success == false){
          this.error=true;
        }
      }
    );
  }
}
