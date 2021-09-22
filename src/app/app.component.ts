import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-management-ui';
  tasks: any[] = [];
  enableSampleForm = true;
  enbaleTaxForm = true;
  formData: any[] = [
    { label: '', type: '', formControlName: '', validation: '' },
  ];
  form!: FormGroup;
  dir: string = 'ltr';
  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.form = this.fb.group({
      firstname: [null,[Validators.required ]] ,
      lastname: null,
      hobbies:this.fb.array([this.createHobby()])
    })
  }
 
  get hobbies():FormArray {
    return this.form.get('hobbies') as FormArray;
  }
  getValue() {
    console.log('form value', this.form);
  }
  createHobby():FormGroup {
    return this.fb.group(
      {
      code:[null,[Validators.required,Validators.maxLength(10),Validators.minLength(5)]],
      desc:null,
    },
    )
  }


  createForm() {

  }

  changeForm(option: String) {
   
    console.log('this.hobbies.length',this.hobbies.length);
    for (let index = 0; index < this.hobbies.length; index++) {
    
      this.hobbies.controls[index].get('code')?.setValidators([]);
      this.hobbies.controls[index].get('code')?.updateValueAndValidity();
      console.log(this.hobbies.controls[index]);
    }
    if (option === 'first') {
      // this.form.removeControl('firstname');
      this.enableSampleForm = false;
      this.form.controls['firstname'].setValidators([]);
      // this.form.controls['firstname'].clearValidators();
      this.form.controls['firstname'].updateValueAndValidity();
    } else {
      this.form.removeControl('lastname');
      this.enbaleTaxForm = false;
    }
    
  }
  addNew(){
    this.hobbies.push(this.createHobby());
    this.dir = 'rtl';
  }
  // getTasks() {
  //   let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhcmEiLCJpYXQiOjE2MzA0MDczMDYsImV4cCI6MTYzMDQxMDkwNn0.nm1TiPbIRFk-6Rcm2nXbbBjVU6rRhYVWKLiuG1osgoU';
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   this.http.get('http://localhost:3000/tasks/listAll', { headers: headers }).subscribe((data: any) => {
  //     console.log('data', data);
  //     this.tasks = data.data;
  //   })
  // }
}
