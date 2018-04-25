import { Component } from '@angular/core';
import { IonicPage, NavParams, AlertController, ViewController } from 'ionic-angular';
import { LoginService } from '../../shared/login.service';

@IonicPage()
@Component({
  selector: 'page-upload-links',
  templateUrl: 'upload-links.html',
})
export class UploadLinksPage {
  user: Array<any> = [];

  event = {
    linkFb: null,
    linkYt: null,
    linkTt: null,
    selectedSMKey: null,
  }

  constructor(
    public navParams: NavParams, 
    private view: ViewController, 
    private alertCtrl: AlertController,
    private loginService: LoginService
  ) {
  }

  // ionViewDidLoad() {
  //   this.loginService.getUser().subscribe(user => {
  //     this.user = user.map(c => ({
  //       value: c.key,
  //       label: c.name,
  //     }));
  //   })
  // }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Your Networks',
      inputs: [
        {
          name: 'fblink',
          placeholder: 'Facebook Link'
        },
        {
          name: 'ytlink',
          placeholder: 'YouTube Link'
        },
        {
          name: 'ttlink',
          placeholder: 'Twitter Link'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'OK',
          handler: key => {
            this.event.selectedSMKey = key;
          }
        }
      ]
    });
    alert.present();
  }

  saveLinks(): void {
    this.loginService.addSM(
      this.event
    ).then(result => {
      this.view.dismiss();
    });
  }

  closeEditLinks() {
    this.view.dismiss();
  }

}
