import { Component, OnInit } from '@angular/core';
import { TypeDocument } from '../../../../interfaces/typeDocument.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../../../interfaces/customer.interface';
import { CustomerService } from '../../../services/customer.service';


@Component({
  selector: 'customer-page',
  templateUrl: './customer-page.component.html',
  styleUrl: './customer-page.component.css'
})
export class CustomerPageComponent implements OnInit{


  visible: boolean = false;
  visibleConfirm = false;

  public form: FormGroup = this.fb.group({
    id:[''],
    name: ['',[Validators.required],[] ],
    lastname: ['',[Validators.required],[] ],
    birthdate: ['',[],[] ],
    numberDocument: ['',[],[] ],
    typeDocument: [{},[],[] ],
    phone: ['',[],[] ],
    email: ['',[],[] ],
    status: [true,[],[]]
  });
  public customers:Customer[] = []

  constructor( private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.customerService.getAllCurriculums()
    //   .subscribe( c => {
    //     this.customers = c;
    //     console.log(c);
    //   });
  }



  typeDocuments: TypeDocument[] = [
    {
      id:"1",
      name: "DNI"
    },
    {
      id:"2",
      name: "CE"
    },
    {
      id:"3",
      name: "RUC"
    }
  ];

  showDialog() {
      this.visible = true;
  }
  onHide() {
      this.form.reset();
      this.visible = false;
  }
  onHideConfirm() {
    this.visibleConfirm = false;
}

  save(){

    console.log("emitir")
  }
  onUpdate(event:Customer){
    this.showDialog();
    this.form.setValue(event);
    console.log(event);
  }
  onConfirm(event:Customer){
    console.log(event);
    this.visibleConfirm = true;
  }
  onDelete(){
    console.log("deleteado")
  }

}
