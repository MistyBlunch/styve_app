import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadLinksPage } from './upload-links';

@NgModule({
  declarations: [
    UploadLinksPage,
  ],
  imports: [
    IonicPageModule.forChild(UploadLinksPage),
  ],
})
export class OtherProfilePageModule {}
