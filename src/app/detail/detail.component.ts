import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.less',
})
export class DetailComponent implements OnInit {
  detailData: any;
  httpClient = inject(HttpClient);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchData(id);
    }
  }

  fetchData(id: string) {
    this.httpClient
      .get('https://api.spacexdata.com/v3/launches/' + id)
      .subscribe((data: any) => {
        this.detailData = data;
      });
  }
}
