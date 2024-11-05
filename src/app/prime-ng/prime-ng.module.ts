import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DropdownModule,

  ],
  exports: [
    DropdownModule,
    CalendarModule,
    DialogModule,
    TableModule,
    AvatarModule,
    ConfirmDialogModule
  ]
})
export class PrimeNgModule { }
