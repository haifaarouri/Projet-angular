import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipesRoutingModule } from './equipes-routing.module';
import { EquipesComponent } from './equipes.component';
import { ListequipesComponent } from './liste-equipe/liste-equipe.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EquipesComponent,
    ListequipesComponent,
    FormEquipeComponent
  ],
  imports: [
    CommonModule,
    EquipesRoutingModule,
    ReactiveFormsModule
  ]
})
export class EquipesModule { }
