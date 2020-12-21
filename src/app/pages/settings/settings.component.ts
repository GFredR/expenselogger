import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage/storage.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  constructor(
      private storageService: StorageService,
      public alertController: AlertController
  ) {}

  ngOnInit() {}
  resetApp(): void {
    this.storageService.clear(true).then(() => {
      this.presentAlert();
    });
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      id: 'appRestAlert',
      cssClass: 'my-custom-class',
      header: 'App Reset Successful',
      subHeader: '',
      message: '',
      buttons: ['OK']
    });

    await alert.present();
  }
}
