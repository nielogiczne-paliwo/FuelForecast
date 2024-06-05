import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstViewComponent } from './first-view/first-view.component';
import { SecondViewComponent } from './second-view/second-view.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
const routes: Routes = [
  { path: '', component: FirstViewComponent },
  { path: 'selectData', component: SecondViewComponent },
  { path: 'dashboard', component: DashboardViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
