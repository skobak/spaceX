import { LaunchesService } from './../../services/launches.service';
import { Component, OnInit } from '@angular/core';
import { Launch } from '../../interfaces/launch';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})

/*
* Get data from API and put it in two arrays: Past and Upcoming launches
*/
export class TimetableComponent implements OnInit {
  public dataUpcoming = [];
  public dataPast = [];
  public searchText: string;
  public isLoaded = true;
  public defaultGroup = 'past';
  constructor(private launchesService: LaunchesService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.launchesService.getLaunches().subscribe(
      (value: any) => {
        // Split result into to buckets: Upcoming and Past
        this.dataUpcoming = value.filter(item => {
          return item.upcoming;
        });
        this.dataPast = value.filter(item => {
          return !item.upcoming;
        });

        this.isLoaded = false;
      },
      error => {
        console.log(error);
        this.isLoaded = false;
      }
    );
  }
}
