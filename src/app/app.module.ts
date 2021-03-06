import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CatagoryPipe } from './pipes/catagory.pipe';
import {AngularFireModule} from '@angular/fire';
import {environment, firebaseConfig} from '../environments/environment';
// import { CatgoryPipe } from './pipes/catgory.pipe';

@NgModule({
  declarations: [AppComponent, CatagoryPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  exports: [
    // CatgoryPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
