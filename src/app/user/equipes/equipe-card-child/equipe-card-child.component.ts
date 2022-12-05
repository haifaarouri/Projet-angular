import { Component, Input, OnInit } from '@angular/core';
import { Equipe } from 'src/app/core/model/equipe';

@Component({
  selector: 'app-equipe-card-child',
  templateUrl: './equipe-card-child.component.html',
  styleUrls: ['./equipe-card-child.component.css']
})
export class EquipeCardChildComponent implements OnInit {

  @Input() equipe: Equipe;
  constructor() { }

  ngOnInit(): void {
  }

}
