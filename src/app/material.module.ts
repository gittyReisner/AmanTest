import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatDividerModule,
    MatTableModule
  ],
  exports: [
    CommonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
