import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { GooglePlus } from '@ionic-native/google-plus';

import { AngularFireModule } from 'angularfire2';
import { config } from '../firebaseConfig'; //lo que está en firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { ProfilePage } from '../pages/profile/profile';
import { NotificationPage } from '../pages/notifications/notifications';
import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';

// para importar de general
import { GeneralService } from '../shared/general.service';
import { CoursesService } from '../shared/courses.service';
// import { QuestionsService } from '../shared/questions.service';

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    NotificationPage,
    SearchPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule, 
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    NotificationPage,
    SearchPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GeneralService,
    CoursesService,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
