import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from './rodape.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    RodapeComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,

  ],
  exports: [RodapeComponent]
})
export class RodapeModule { }
