import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyDreamAppComponent } from './my-dream-app/my-dream-app.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';

const routes: Routes = [
  { 
    path:'',
    redirectTo: '/my-dream-app',
    pathMatch: 'full',
  },
  { 
    path:'my-dream-app',
    component: MyDreamAppComponent
  },
  {
    path: 'directives',
    component: DisplayDetailsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
