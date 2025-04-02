import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.less',
})
export class MissionlistComponent implements OnInit {
  data: any[] = [];
  yearFilter: string = '';
  launchSuccess: string = '';
  landSuccess: string = '';
  years: string[] = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
  ];
  httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    let url = 'https://api.spacexdata.com/v3/launches?';

    if (this.yearFilter) url += `launch_year=${this.yearFilter}&`;
    if (this.launchSuccess) url += `launch_success=${this.launchSuccess}&`;
    if (this.landSuccess) url += `land_success=${this.landSuccess}`;

    this.httpClient.get(url).subscribe((data: any) => {
      this.data = data;
    });
  }
  trackByFlightId(index: number, flight: any): number {
    return flight.flight_number;
  }

  setYearFilter(year: string): void {
    this.yearFilter = year;
    this.fetchData();
  }

  setLaunchSuccessFilter(val: string): void {
    this.launchSuccess = val;
    this.fetchData();
  }

  setLandSuccessFilter(val: string): void {
    this.landSuccess = val;
    this.fetchData();
  }
  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.yearFilter = input.value;
    this.fetchData();
  }

  resetFilters(): void {
    this.yearFilter = '';
    this.launchSuccess = '';
    this.landSuccess = '';
    this.fetchData();
  }
}
