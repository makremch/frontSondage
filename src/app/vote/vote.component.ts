import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SondageService } from '../Services/sondage.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  constructor(private sondageService:SondageService, private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.idSondage = this.route.snapshot.params["id"]
    this.sondageService.showVoteBySondage(this.idSondage).subscribe(
      res=> {
        console.log(res);
        this.vote = res.content || [];

        console.log(this.vote);
        this.pourcentageOui = (this.vote.filter(vote =>vote.choix == true).length / this.vote.length )* 100;
      }
    )
  }
idSondage : string;
choix: Boolean;
vote: any[] = [];
pourcentageOui : number;


voter(){
  this.sondageService.createvote(this.choix,this.idSondage).subscribe(
    res => {
      console.warn(res);
      
    },
    error => {
      console.log(error);
    }
  )
}



}
