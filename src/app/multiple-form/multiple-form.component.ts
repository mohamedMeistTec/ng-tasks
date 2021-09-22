import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShareFormService } from './share-form.service';

@Component({
  selector: 'app-multiple-form',
  templateUrl: './multiple-form.component.html',
  styleUrls: ['./multiple-form.component.css']
})
export class MultipleFormComponent implements OnInit {
   form!: FormGroup;
  constructor(private fb:FormBuilder,private share:ShareFormService,) {
// this.form = this.fb.group({
//   name:null,
//   // address:this.fb.group({
//   //   number:null,
//   //   buildingNumber:null
//   // })
//    address:this.fb.array([this.fb.group({
//      buildNumber:null,
//      street:null
//    }) ])
// })
this.form = this.share.form;
  }

  ngOnInit(): void {
  }

}
