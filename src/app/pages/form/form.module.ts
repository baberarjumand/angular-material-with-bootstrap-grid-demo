import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';

import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, FormRoutingModule, MatFormFieldModule],
})
export class FormModule {}
