import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from '../material.module';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [],
})
export class ModalModule { }
