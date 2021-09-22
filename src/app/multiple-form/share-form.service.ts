import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ShareFormService {
  form!: FormGroup;
  constructor(private fb:FormBuilder) {
    this.form =  this.fb.group({
      name:null,
      // address:this.fb.group({
      //   number:null,
      //   buildingNumber:null
      // })
       address:this.fb.array([this.fb.group({
         buildNumber:null,
         street:null
       }) ])
    })
   }
}
