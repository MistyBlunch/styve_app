import { Component, OnInit } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GooglePlus } from '@ionic-native/google-plus';

import { SearchPage } from '../pages/search/search';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { TabsPage } from '../pages/tabs/tabs'; //me lleva al menu, search,etc

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{
  rootPage:any = TabsPage;
  user = null;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public afAuth: AngularFireAuth,
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
    this.googlePlus.trySilentLogin(user => this.user = user);
  }

  login() {
    this.googlePlus.login({
      'offline' : true
    }).then(res => alert('error'));
  }

  logout() {
    this.googlePlus.logout().then(() => this.user = null);
  }
}

