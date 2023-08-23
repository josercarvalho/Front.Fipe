import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelafipeComponent } from './components/tabelafipe/tabelafipe.component';

const routes: Routes = [
  {
    path: "",
    component: TabelafipeComponent
  },
  {
  path: "tabelafipe",
  component: TabelafipeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
