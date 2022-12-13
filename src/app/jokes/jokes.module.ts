import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '../material.module';
import { ModalComponent } from '../modal/modal.component';
import { ModalModule } from '../modal/modal.module';
import { JokesComponent } from './jokes.component';

@NgModule({
  declarations: [
    JokesComponent,
    
  ],
  imports: [
    MaterialModule,
    MatTableModule,
    ModalModule
  ],
  providers: [],
  entryComponents: [ModalComponent]
})
export class JokesModule { }
