import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sondage } from '../interfaces/sondage.interface';
import { SondageService } from '../Services/sondage.service';

@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.component.html',
  styleUrls: ['./sondage.component.css']
})
export class SondageComponent implements OnInit {

  constructor(private sondageService:SondageService,
    private router:Router) { }

titre : string;
description: string;
sondages: Sondage[];
choix: string;


  ngOnInit(): void {
    this.sondageService.getSondages().subscribe(
      res => {
        this.sondages = res.content ;
        console.table(this.sondages);
      }
    )
  }

  
  createSondage(){
    this.sondageService.createSondage(this.titre,this.description).subscribe(
      res => {
        this.sondages.push(res.data);
        console.warn("success creation sondage !");
        
      },
      error => {
        console.log(error);
      }
    )
  }



  

}
