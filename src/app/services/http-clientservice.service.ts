import { Injectable } from '@angular/core';

import  {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientserviceService {

  constructor(public httpclient: HttpClient) { }

  public HttpPostRequest(request:any, apiServicePath:string){
    return this.httpclient.post(apiServicePath,JSON.stringify(request))

  }

  public  HttpGetRequest (apiServicePath:string){
    return this.httpclient.get(apiServicePath)
  }


}
