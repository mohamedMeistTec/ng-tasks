import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
registerLocaleData(en);
// import { HttpClientModule } from '@angular/common/http';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MultipleFormComponent } from './multiple-form/multiple-form.component';
import { AddressFormComponent } from './multiple-form/address-form/address-form.component';
import { RouterModule, Routes } from '@angular/router';
export const routes:Routes = [
  {path:'multiple-form',component:MultipleFormComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    MultipleFormComponent,
    AddressFormComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NzSelectModule,
    FormsModule,
    ReactiveFormsModule,NzButtonModule,
    CKEditorModule,
    RouterModule.forRoot(routes)

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
