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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_piramide_1 = require('./app.piramide');
var AppComponent = (function () {
    function AppComponent(titleService) {
        this.titleService = titleService;
        titleService.setTitle('Brain Tester Game');
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<piramide></piramide>'
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var BodyModule = (function () {
    function BodyModule() {
    }
    BodyModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [AppComponent, app_piramide_1.Piramide]
        }), 
        __metadata('design:paramtypes', [])
    ], BodyModule);
    return BodyModule;
}());
exports.BodyModule = BodyModule;
//# sourceMappingURL=app.component.js.map