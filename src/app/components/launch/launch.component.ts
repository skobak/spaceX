import { Component, OnInit, Input } from '@angular/core';
import { Launch } from '../../Interfaces/launch';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})

/*
* View for show line about launch
*/
export class LaunchComponent implements OnInit {
  @Input()
  item: Launch;
  @Input()
  index: number;
  constructor() {}

  ngOnInit() {}
}
