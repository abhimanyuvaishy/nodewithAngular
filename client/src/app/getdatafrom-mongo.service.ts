import { Injectable } from '@angular/core';
import {Jsonp,Http, Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export class custDetail{
  constructor(public _id:any,public first_name:string,public last_name:string,public age:number,
  public designation:string,
  public Skills:Array<string>){}
}

@Injectable()
export class GetdatafromMongoService {

  constructor(private _jsonp:Jsonp,private _http:Http) { }
  getdata(){
   return this._jsonp.request('http://localhost:3000/api/tasks?callback=JSONP_CALLBACK',{ method: 'Get' })
    .map(response => <custDetail[]> response.json());

  }
  postdata(data:custDetail){
  let bodyString = JSON.stringify(custDetail); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({headers:headers});
  return  this._http.post('http://localhost:3000/api/task',data,options)
            .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
          
  }

// private extractData(res: Response) {
// 	let body = res.json();
//         return body.data || {};
//     }
//     private handleErrorObservable (error: Response | any) {
// 	console.error(error.message || error);
// 	return Observable.throw(error.message || error);
//     }
}
