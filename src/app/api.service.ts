import { Injectable } from '@angular/core';
import { HttpClient } from "../../node_modules/@angular/common/http";
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient){}

  getNews(){
    return this.http.get<any>('https://newsapi.org/v1/articles?source=bbc-news&apiKey=554109c975e14549b32eb8b2f41fe8f8')
    .pipe(
        map((response: any) => {
            console.log('response', response);
            // const data = response.json();
            return response.articles;
          })
    );
  }

  storeArticles(articles: any[]){
    console.log(articles);
    return this.http.put('https://angular-test-91dc6.firebaseio.com/data.json', articles);
  }
}
