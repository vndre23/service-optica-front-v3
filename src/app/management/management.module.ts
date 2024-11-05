import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CustomerFormComponent } from './components/customer/customer-form/customer-form.component';
import { CustomerTableComponent } from './components/customer/customer-table/customer-table.component';
import { CustomerPageComponent } from './page/customer/customer-page/customer-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CustomerFormComponent,
    CustomerTableComponent,
    CustomerPageComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports:[
    CustomerPageComponent
  ],
})
export class ManagementModule { }
