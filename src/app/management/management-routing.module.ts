import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPageComponent } from './page/customer/customer-page/customer-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: CustomerPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
