
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypeDocument } from '../../../../interfaces/typeDocument.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {
  @Input()
  form!: FormGroup;

  constructor( private fb: FormBuilder) {}

  @Input()
  typeDocuments: TypeDocument[] = [];
  @Output()
  onCloseModal:EventEmitter<void> = new EventEmitter();

  @Output()
  onSave:EventEmitter<void> = new EventEmitter();

  onClickCloseModal(){
    this.onCloseModal.emit();
    this.form.reset();
  }

  isValidField( field: string){
    return this.form.controls[field].errors && this.form.controls[field].touched;
  }
  getFieldError( field: string): string | null{
    if(!this.form.controls[field]) return null;
    const errors = this.form.controls[field].errors || {};
    for (const key of Object.keys(errors)) {
     switch(key){
      case 'required':
        return 'Este campo es requerido!'
      case 'minlength':
        return `Mínimo ${errors['minlength'].requiredLength} caracters`
     }

    }
    return null;
  }

  save(){
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.onSave.emit();
  }

  calculateAge(): number | null {
    const birthDateString = this.form.controls['birthdate'].value; // Obtiene el valor de la fecha de nacimiento como string
    if (birthDateString) {
        const birthDate = new Date(birthDateString); // Convierte el string a Date

        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        // Ajustar la edad si no se ha alcanzado el cumpleaños este año
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age; // Devuelve la edad
    } else {
        return null; // O maneja el caso en que no hay fecha de nacimiento
    }

  }


}
