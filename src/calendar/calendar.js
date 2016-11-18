"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var $ = require("jquery");
require("fullcalendar");
/*
  Generated class for the Calendar component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var CalendarComponent = (function () {
    function CalendarComponent() {
    }
    CalendarComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit");
    };
    CalendarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            console.log("100ms after ngAfterViewInit ");
            $('angular2-fullcalendar').fullCalendar(_this.options);
        }, 100);
    };
    CalendarComponent.prototype.ngAfterContentChecked = function () {
    };
    CalendarComponent.prototype.ngAfterViewChecked = function () {
    };
    return CalendarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CalendarComponent.prototype, "options", void 0);
CalendarComponent = __decorate([
    core_1.Component({
        template: '<div></div>',
        selector: 'angular2-fullcalendar'
    }),
    __metadata("design:paramtypes", [])
], CalendarComponent);
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=calendar.js.map