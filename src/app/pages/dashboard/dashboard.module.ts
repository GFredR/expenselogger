import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {IonicModule} from '@ionic/angular';
import {SharedModule} from '../../shared/components/shared.module';
import {AppModule} from '../../app.module';
import {CatagoryPipe} from '../../pipes/catagory.pipe';


@NgModule({
  declarations: [DashboardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{path: '', component: DashboardComponent}]),
        IonicModule,
        SharedModule,
        // AppModule
    ]
})
export class DashboardModule { }
