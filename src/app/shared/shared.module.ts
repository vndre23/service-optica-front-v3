import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LayoutComponent,
    SidebarComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports: [
    LayoutComponent,
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
