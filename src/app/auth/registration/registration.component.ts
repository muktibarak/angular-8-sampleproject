import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup;
  dataSaved = false;
  message: string;
  constructor(private formBuilder: FormBuilder, private employeeservice: EmployeeserviceService) { }

  ngOnInit() {
    //setting the initial form state while rendering application
    this.setFormState();
  }

  setFormState(): void{
    this.regForm = this.formBuilder.group({
      LastName:['', [Validators.required]],
      FirstName:['', [Validators.required]],
      EmailID:['',[Validators.required]],
      Password:['', [Validators.required]]
    })
  }
//we need form submit method here
onSubmit(){
  let employee = this.regForm.value;
  this.createemployee(employee);
  this.regForm.reset();
}

//subscribe the observable from employeeservice.ts
  createemployee(employee: Employee){
    this.employeeservice.createEmployee(employee).subscribe(()=>{
      this.dataSaved = true;
      this.message = "New user created";
      this.regForm.reset();
    })
  }

}
