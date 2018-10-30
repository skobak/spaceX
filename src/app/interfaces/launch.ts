export interface Launch {
  flight_number: number;
  mission_name: string;
  upcoming: boolean;
  launch_year: number;
  launch_date_utc: string;
  rocket_name: string;
  launch_site_name: string;
  launch_site_name_long: string;
  launch_success: boolean;
  land_success: boolean;
  details: string;
}
