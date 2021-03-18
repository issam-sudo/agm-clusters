import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgmClustersComponent } from './agm-clusters/agm-clusters.component';

const routes: Routes = [
  {path:''  , component: AgmClustersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
