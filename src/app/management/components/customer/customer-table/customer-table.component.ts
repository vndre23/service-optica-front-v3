import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../../../../interfaces/customer.interface';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.css'
})
export class CustomerTableComponent {

  @Input()
  public customers:Customer[] = []
  @Output()
  onUpdate:EventEmitter<Customer> = new EventEmitter();

  @Output()
  onConfirm:EventEmitter<Customer> = new EventEmitter();

  onClickUpdate(event:Customer){
    this.onUpdate.emit(event);
  }
  onClickDelete(){
    this.onConfirm.emit();
  }


}
