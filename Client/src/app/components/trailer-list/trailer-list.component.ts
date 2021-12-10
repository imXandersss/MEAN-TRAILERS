import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import{TrailerService}from '../../services/trailer.service'
@Component({
  selector: 'app-trailer-list',
  templateUrl: './trailer-list.component.html',
  styleUrls: ['./trailer-list.component.css']
})
export class TrailerListComponent implements OnInit {

  trailers:any=[];

  constructor(private trailerService:TrailerService, private router: Router) { }

  ngOnInit(): void {
    this.trailerService.getTrailers() 
    .subscribe(
      res=>{
        this.trailers=res;
      },
      err=>console.log(err)
    )
  }




selectedTrailer(id: string){

this.trailerService.getTrailer(id)
this.router.navigate(['trailerlist',id]);

}
}
