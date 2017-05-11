import { Component,OnInit } from '@angular/core';
import{GetdatafromMongoService,custDetail} from './getdatafrom-mongo.service';
import {Observable} from 'rxjs/observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _data:GetdatafromMongoService){}
  title = 'Employee List';
  employees: custDetail[];
  employee =new custDetail(0,"Kumar","Abhimanyu",22,"developer",["Node.js","Express","MongoDb","Mongojs"]);

  ngOnInit(){
   this._data.getdata().subscribe(x=>this.employees=x);
}

saveData(){
  this._data.postdata(this.employee).subscribe(x=>this.employees=x);
}

}
