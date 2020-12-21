import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BudgeComponent} from './budge.component';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';


@NgModule({
  declarations: [BudgeComponent],
  imports: [
    CommonModule,
      RouterModule.forChild([{path: '', component: BudgeComponent}]),
       IonicModule
  ]
})
export class BudgeModule { }
