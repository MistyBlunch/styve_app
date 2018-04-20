import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EditDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-dashboard',
  templateUrl: 'edit-dashboard.html',
})
export class EditDashboardPage {

  constructor(private navParams: NavParams, private view: ViewController) {
  }

  closeEditDashboard() {
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditDashboardPage');
  }

  public event = {
    month: '2018-04-13',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

}
