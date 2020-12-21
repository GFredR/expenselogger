import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import {SettingsComponent} from './settings.component';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: SettingsComponent}]),
    IonicModule
  ]
})
export class SettingsModule { }
