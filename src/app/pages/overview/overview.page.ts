import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'et-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
  data = [];
  categories: any[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('./assets/data/db.json')
      .subscribe((res: any) => {
        this.data = res;
        this.categories = res.categories;
      });
  }
}
