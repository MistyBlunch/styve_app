import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GooglePlus } from '@ionic-native/google-plus';

import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { TabsPage } from '../pages/tabs/tabs'; //me lleva al menu, search,etc
import { ProfilePage } from '../pages/profile/profile';

// import { PopoverSocialMedia } from '../components/popover-socialmedia/popover-socialmedia';

//para el cuestionario
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})

export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = TabsPage;  //es TabsPage
  user = null;
  testCheckboxOpen: boolean;
  testCheckboxResult;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController, //cuestionario
    private googlePlus: GooglePlus
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit(): void {
    this.googlePlus.trySilentLogin(user=> this.user = user);
  }

  login() {
    this.googlePlus.login({
      'offline' : true
    }).then(res => {
        this.user = res; 
    }, err => alert('error'));
  }

  logout() {
    this.googlePlus.logout().then(() => this.user = null);
  }

  openSettingsPage() {
    this.nav.push(SettingsPage);
  }


//cuestionario
doCheckbox() {
  let alert = this.alertCtrl.create();
  alert.setTitle('Which courses you master and know best?');

  alert.addInput({
    type: 'checkbox',
    label: 'Robotic',
    value: 'value1'
    // checked: true
  });

  alert.addInput({
    type: 'checkbox',
    label: 'Electronic',
    value: 'value2'
  });

  alert.addInput({
    type: 'checkbox',
    label: 'Algorithms',
    value: 'value3'
  });

  alert.addInput({
    type: 'checkbox',
    label: 'AI',
    value: 'value4'
  });

  alert.addInput({
    type: 'checkbox',
    label: 'Web Pages',
    value: 'value5'
  });

  alert.addInput({
    type: 'checkbox',
    label: 'IoT',
    value: 'value6'
  });

  alert.addInput({
    type: 'checkbox',
    label: 'Programming Languages',
    value: 'value6'
  });

  alert.addInput({
    type: 'checkbox',
    label: 'Chemistry',
    value: 'value6'
  });

  alert.addInput({
    type: 'checkbox',
    label: 'VR',
    value: 'value6'
  });

  alert.addButton('Cancel');
  alert.addButton({
    text: 'Okay',
    handler: data => {
      console.log('Checkbox data:', data);
      this.testCheckboxOpen = false;
      this.testCheckboxResult = data;
    }
  });
  alert.present().then(() => {
    this.testCheckboxOpen = true;
  });
}
}

