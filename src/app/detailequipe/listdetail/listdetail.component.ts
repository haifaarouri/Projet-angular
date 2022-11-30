import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DetailEquipe } from 'src/app/core/model/detailequipe';
import { DetailequipeService } from 'src/app/core/services/detailequipe.service';

@Component({
  selector: 'app-listdetail',
  templateUrl: './listdetail.component.html',
  styleUrls: ['./listdetail.component.css']
})
export class ListdetailComponent implements OnInit {
  public listt: DetailEquipe[];
  searchText: any;
  constructor(private ds:DetailequipeService , private router:Router) { }

  ngOnInit(): void {
    this.ds.getAllDepartements().subscribe(

      (res:DetailEquipe[])=>{this.listt=res;console.log(res)}
     )
  }
  delete(d:DetailEquipe){
    
    this.ds.delete(d.idDetailEquipe).subscribe();
    location.reload();
  }
}