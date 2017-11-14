import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private data: Array<any>
  constructor(private http :HttpClient) { 
    // this.obj = [{name : 'jaya' , username : 'jayasaw', email : 'jaya@gmail.com'}];
  }

  

    // getData(){
    //     this.http.get("src/data/userData.json")
    //     .subscribe(data =>{
    //     console.log(data)
    //     });
    // }
  // getUser(){
  //   return Observable.of(this.obj);
  // }


   getData() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");    
}


//  getData() {
//        return this.http.get("https://jsonplaceholder.typicode.com/users")
//        .subscribe(data =>{
//          console.log(data);
//        });    
//    }

}
