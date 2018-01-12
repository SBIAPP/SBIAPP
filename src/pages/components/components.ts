import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InputsPage } from '../inputs/inputs';
import { ListPage } from '../list/list';
/**
 * Generated class for the ComponentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-components',
  templateUrl: 'components.html',
})
export class ComponentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  openInputs(){
    this.navCtrl.push (InputsPage)
  }
  openList(){
    this.navCtrl.push (ListPage)
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ComponentsPage');
  }

}
