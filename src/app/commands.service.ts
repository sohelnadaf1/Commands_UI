import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandsService {

  constructor(private httpclient:HttpClient) { }


  GetCommands(): Observable<any>{
return this.httpclient.get("https://localhost:44332/api/Commands");
  }
}
