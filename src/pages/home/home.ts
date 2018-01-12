import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComponentsPage } from '../components/components';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  openComponents(){
    this.navCtrl.push (ComponentsPage)
       
  }
}
