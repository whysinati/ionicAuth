import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 
import { User } from '../user';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(
    private authService: AuthService, 
    private router: Router) {
    //console.log(this.authService.test());
   }

  ngOnInit() {
  }

  logout(): void{
    this.authService.logout().subscribe(
      (response: any) => {
        this.router.navigate(['/login']);
      }
    );
  }

}
