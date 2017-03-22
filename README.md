
# Angular 2: FullCalendar component

An Angular 2 component for [fullcalendar](https://fullcalendar.io/).

## Installation
```
npm install ap-angular2-fullcalendar --save
```
## Usage
#### Import the calendar component
```
import {CalendarComponent} from "angular2-fullcalendar/src/calendar/calendar";
// other imports

@NgModule({
  declarations: [
    // other declarations
    CalendarComponent
  ],
  // ...
})
export class AppModule {}
```
#### Add config in my-component.ts
For a full list of options available, please refer to fullcalendar.io documentation at https://fullcalendar.io/docs/
```
@Component({
  selector: 'my-component',
  templateUrl: 'my-component.html'
})
export class MyComponent{
    calendarOptions:Object = {
        height: 'parent',
        fixedWeekCount : false,
        defaultDate: '2016-09-12',
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
          {
            title: 'All Day Event',
            start: '2016-09-01'
          },
          {
            title: 'Long Event',
            start: '2016-09-07',
            end: '2016-09-10'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2016-09-09T16:00:00'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2016-09-16T16:00:00'
          },
          {
            title: 'Conference',
            start: '2016-09-11',
            end: '2016-09-13'
          },
          {
            title: 'Meeting',
            start: '2016-09-12T10:30:00',
            end: '2016-09-12T12:30:00'
          },
          {
            title: 'Lunch',
            start: '2016-09-12T12:00:00'
          },
          {
            title: 'Meeting',
            start: '2016-09-12T14:30:00'
          },
          {
            title: 'Happy Hour',
            start: '2016-09-12T17:30:00'
          },
          {
            title: 'Dinner',
            start: '2016-09-12T20:00:00'
          },
          {
            title: 'Birthday Party',
            start: '2016-09-13T07:00:00'
          },
          {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2016-09-28'
          }
        ]
      };
  }
}
```
#### Add selector in template file my-component.html
```
<angular2-fullcalendar [options]="calendarOptions"></angular2-fullcalendar>
```
#### Import the fullcalendar css
If you're using Angular CLI, this is as simple as including one line in your style.css file:
```
@import "fullcalendar/dist/fullcalendar.min.css";
```
Alternatively, you can just reference the file directly. This would look something like
```
<link href="node_modules/fullcalendar/dist/fullcalendar.min.css" rel="stylesheet">
```

#### Use CalendarComponent as a ViewChild
```
export class MyComponent{
  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;

  changeCalendarView(view) {
    this.myCalendar.fullCalendar('changeView', view);
  }
```

## TODO's
* Tests
