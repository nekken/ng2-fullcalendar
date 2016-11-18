import {Component, Input, OnInit, AfterViewInit, AfterContentChecked, AfterViewChecked} from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import {Options} from "fullcalendar";

/*
  Generated class for the Calendar component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  template: '<div></div>',
  selector: 'angular2-fullcalendar'
})
export class CalendarComponent implements OnInit,AfterViewInit,AfterContentChecked,AfterViewChecked{

  @Input() options:Options;
  text: string;
  calendarInitiated:boolean;

  constructor() {
  }

  ngOnInit():void {
    console.log("ngOnInit");
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      // console.log("100ms after ngAfterViewInit ");
      $('angular2-fullcalendar').fullCalendar(this.options);
    }, 100)
  }
  ngAfterContentChecked(){
  }
  ngAfterViewChecked(){
  }
}
