import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts = [];
  constructor(private http: HttpClient) { }

  async getUsers(){
    let returnData = <any>await this.http.get("https://randomuser.me/api/?results=20").toPromise();
    console.log(returnData);

    this.contacts = returnData.results;

    return this.contacts;
  }

  findUser(targetAccountId: String){

    let result = this.contacts.find((user)=>{

      let userId = user.id.name + user.id.value;

      if(targetAccountId == userId){
        return true;
      } else{
        return false;
      }
    });

    return result;
  }
}
