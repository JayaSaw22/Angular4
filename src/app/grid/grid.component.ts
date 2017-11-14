import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs/observable';
import { HttpClient } from '@angular/common/http';
//import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  encapsulation: ViewEncapsulation.None
  
})
export class GridComponent implements OnInit {

  public users: Array<any>

  constructor(private dataService :DataService) {
  
    this.getUserData();
   }

       public getUserData(){
         this.dataService.getData()
          .subscribe(data => this.users = data);
        // this.http.get("https://jsonplaceholder.typicode.com/users")
        // .subscribe(data => this.users = data);
       }
  

  ngOnInit()   {
    
   
    
  }

  

}
