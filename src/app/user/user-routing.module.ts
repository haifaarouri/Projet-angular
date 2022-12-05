import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [{
  path: '', component: UserComponent, children: [
    { path: '', loadChildren: () => import('./etudiant/etudiant.module').then(m => m.EtudiantModule) },
    { path: 'student', loadChildren: () => import('./etudiant/etudiant.module').then(m => m.EtudiantModule) },
    { path: 'universite', loadChildren: () => import('./universite/universite.module').then(m => m.UniversiteModule) },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
