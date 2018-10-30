import { Launch } from './../interfaces/launch';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {
  private url_api = 'https://api.spacexdata.com/v2';
  private order = 'desc';
  private order_field = 'fligth_number';
  constructor(private http: HttpClient) {}

  getLaunches() {
    return this.http
      .get(
        `${this.url_api}/launches?sort=${this.order_field}&order=${this.order}`
      )
      .pipe(map(value => this.parseResponse(value)));
  }

  /*
  *  Transform data from JSON to Launch interface object
  */
  parseResponse(value) {
    return value.map(array_item => {
      {
        let _launch: Launch;
        _launch = {
          flight_number: array_item.flight_number,
          launch_year: array_item.launch_year,
          mission_name: array_item.mission_name,
          details: array_item.details,
          launch_date_utc: array_item.launch_date_utc,
          launch_site_name: array_item.launch_site.site_name,
          launch_site_name_long: array_item.launch_site.site_name_long,
          launch_success: array_item.launch_success,
          land_success: array_item.land_success,
          rocket_name: array_item.rocket.rocket_name,
          upcoming: array_item.upcoming
        };
        return _launch;
      }
    });
  }
}
