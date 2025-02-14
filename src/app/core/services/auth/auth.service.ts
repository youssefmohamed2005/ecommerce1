import { jwtDecode } from './../../../../../node_modules/jwt-decode/build/esm/index.d';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Console } from 'console';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 constructor( ) { }
  private readonly HttpClient = inject(HttpClient);

  userData:any = null


  sendRegisterForm(data:object):Observable<any>
  {
    return this.HttpClient.post(`${environment.baseUrl}/api/v1/auth/signup`, data)
  }

  sendLoginForm(data:Object):Observable<any>
  {
    return this.HttpClient.post(`${environment.baseUrl}/api/v1/auth/signin`,data)
  }

  saveUserData():void{
    if(  localStorage.getItem('userToken') !==null){



     console.log('userData', this.userData)
}

  }


}
