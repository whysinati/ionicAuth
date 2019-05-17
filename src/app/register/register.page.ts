import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms'; 
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user:User = new User();
  errorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router) {
    //console.log(this.authService.test());
   }

  ngOnInit() {
  }

  response(response): void{
    if(response.success===false){
      this.errorMessage = 'Invalid / Something not right';
    }

    if(response.success===true){
      this.router.navigate(['/login']);
    }
  }

  onSubmit(): void{
    this.authService.register(this.user).subscribe(
      (response)=>{
        this.response(response);
        console.log(response); // this reveals the hash and salt
        //console.log(this.user); //this reveals the password
      }
      
    );
  }

}
