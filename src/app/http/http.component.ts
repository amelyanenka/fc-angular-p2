import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  articles: any[] = [ ];
  constructor(private apiService: ApiService){}

  ngOnInit() {
  }

  onSave(){
    this.apiService.storeArticles(this.articles).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
 }

  onGet(){
    this.apiService.getNews().subscribe(
      (articles: any) => {
        //console.log(servers)
        this.articles = articles;
      },
      (error) => console.log(error)
    )
  }

}
