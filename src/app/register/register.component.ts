import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../Services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService:RegisterService,
    private router:Router) { }

  email : string;
  password : string;

  ngOnInit(): void {
  }

  register(){
    this.registerService.register(this.email,this.password).subscribe(
      
      res => {
        console.log(res); 
        this.router.navigateByUrl("login")
      },
      error => {
        console.error(error);
      }
    )
  }
}
