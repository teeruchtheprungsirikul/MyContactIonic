import { ContactService } from './../services/contact.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contacts = [];

  constructor(private navCtrl: NavController,private contactService: ContactService){
    this.init();
  }

  async init() {
    let resultArray = await this.contactService.getUsers();
    this.contacts = resultArray;
  }
  viewDetail(item){
    console.log(item);
    this.navCtrl.navigateForward('/detail/' + item.id.name + item.id.value);
  }
}
