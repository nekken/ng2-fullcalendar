import {AfterViewInit, Component, ElementRef, EventEmitter, Input, NgZone, Output} from '@angular/core';
import {OptionsInput} from "fullcalendar";
import 'fullcalendar';
import * as $ from 'jquery';

@Component({
    templateUrl: 'calendar.html',
    selector: 'angular2-fullcalendar'
})
export class CalendarComponent implements AfterViewInit {

    /*!
     * This component is based on the ap-angular2-fullcalendar component
     * This component is extended to use with more views on one page
     */

    // Generate random ID
    id: string = Date.now().toString();

    @Input() options: OptionsInput;
    @Output() initialized: EventEmitter<boolean> = new EventEmitter<boolean>();

    public myView;

    constructor(private element: ElementRef, private zone: NgZone) {
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.zone.runOutsideAngular(() => {
                this.myView = $('#' + this.id);
                this.myView.fullCalendar(this.options);
                this.initialized.emit(true);
            })
        }, 100)
    }


    fullCalendar(...args: any[]): any {
        if (!args) {
            return;
        }
        switch (args.length) {
            case 0:
                return;
            case 1:
                return this.myView.fullCalendar(args[0]);
            case 2:
                return this.myView.fullCalendar(args[0], args[1]);
            case 3:
                return this.myView.fullCalendar(args[0], args[1], args[2]);
        }
    }

}
