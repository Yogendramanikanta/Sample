import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestserviceService {

  constructor(private http:HttpClient) { }

  adminRegistractionApi(Body:any):Observable<any>{
    return this.http.post<any>("",Body);
  }

  adminFindUserApi(eamilId:any):Observable<any>{
    return this.http.get(""+eamilId);
  }

  adminUpdateUserData(emailId:any,body:any):Observable<any>{
    return this.http.put(""+emailId,body);
  }




  //******************************************UserRegistractionApi's************************************
  userRegistrationGetApi():Observable<any>{
    return this.http.get("");
  }
  userRegistrationPostApi(Body:any):Observable<any>{
    return this.http.post("",Body);
  }
}
