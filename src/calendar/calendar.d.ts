import { OnInit, AfterViewInit, AfterContentChecked, AfterViewChecked } from '@angular/core';
import 'fullcalendar';
import { Options } from "fullcalendar";
export declare class CalendarComponent implements OnInit, AfterViewInit, AfterContentChecked, AfterViewChecked {
    options: Options;
    text: string;
    calendarInitiated: boolean;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentChecked(): void;
    ngAfterViewChecked(): void;
}
