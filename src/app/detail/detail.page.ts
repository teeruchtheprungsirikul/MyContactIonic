import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  account;

  constructor(private route: ActivatedRoute, private contactSevice: ContactService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);

      let user = this.contactSevice.findUser(params.accountId);
      console.log('User ', user);
      this.account = user;
    });
  }

  composeEmail(){
    window.open('mailto:' + this.account.email);
  }

  call(){
    window.open('tel:' + this.account.cell);
  }
}
