import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { PopupComponent } from './popup/popup.component';

const routes: Routes = [{
  path: 'lista',
  component:ListaComponent
},
{
  path: 'about',
  component:AboutComponent
},
{
  path: 'home',
  component:HomeComponent
},
{
  path: 'lista/person',
  component:PopupComponent
}



];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
