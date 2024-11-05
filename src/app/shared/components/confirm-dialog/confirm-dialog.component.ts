import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css',
  providers: [ConfirmationService]
})
export class ConfirmDialogComponent {
  constructor(private confirmationService: ConfirmationService) {}



  @Input()
  header = '¿Estas seguro de ejecutar esta acción?'

  @Input()
  message = 'Porfavor confirmar acción.';

  @Output()
  onAccept:EventEmitter<void> = new EventEmitter();
  @Output()
  onReject:EventEmitter<void> = new EventEmitter();

  onClickAccept(){
    this.onAccept.emit();
  }
  onClickReject(){
    this.onReject.emit();
  }

}
