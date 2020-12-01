import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,
    private router:Router) { }

  email : string;
  password : string;

  ngOnInit(): void {
  }

  logIn(){
    this.authService.login(this.email,this.password).subscribe(
      
      res => {
        this.router.navigateByUrl("sondage")
        console.error(res.token.token); 
        
      },
      error => {
        console.log(error);
      }
    )
  }
}
