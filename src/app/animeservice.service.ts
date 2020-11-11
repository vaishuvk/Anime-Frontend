import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AnimeserviceService {
  url_API: string ="http://localhost:8090/springboot-crud-rest/anime/getAll";
  url_API2: string = "http://localhost:8090/springboot-crud-rest/anime/addAnime";

  constructor(private http: HttpClient) { }
  getAllAnime(){
    return this.http.get(`${this.url_API}`);

  }

  insert(obj){
    return this.http.post(this.url_API2,JSON.stringify(obj),{headers:{"Content-Type":"application/json"}});
  }
 
  
}

