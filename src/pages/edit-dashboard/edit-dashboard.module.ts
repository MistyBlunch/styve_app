import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditDashboardPage } from './edit-dashboard';

@NgModule({
  declarations: [
    EditDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(EditDashboardPage),
  ],
})
export class EditDashboardPageModule {}
