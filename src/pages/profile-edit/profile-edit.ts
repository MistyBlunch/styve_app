import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { CoursesService } from '../../shared/courses.service'
import { LoginService } from '../../shared/login.service';

import firebase from 'firebase'; //for me

@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profile-edit.html',
})
export class ProfileEditPage {
  public myPhotosRef: any;
  public myPhoto: any;
  public myPhotoURL: any;

  user: Object = {};
  base64Image: string;

  // editar lo de private navCtrl
  constructor(private navCtrl: NavController, 
    public navParams: NavParams,
    private camera: Camera,
    public coursesService: CoursesService,
    private loginService: LoginService) 
    {
      this.myPhotosRef = firebase.storage().ref(`users`);
    }


    ngOnInit() {
      this.user = this.loginService.getUser();
    }
    
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      saveToPhotoAlbum: true,
      cameraDirection: this.camera.Direction.FRONT
    }

    this.camera.getPicture(options).then(imageData => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, err => alert(err.message));
  }

  private uploadPhoto(): void {
    this.myPhotosRef.child(this.generateUUID()).child('myPhoto.png')
      .putString(this.myPhoto, 'base64', { contentType: 'image/png' })
      .then((savedPicture) => {
        this.myPhotoURL = savedPicture.downloadURL;
      });
  }

  private generateUUID(): any {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  getUser() {
    return this.user;
  }
}
