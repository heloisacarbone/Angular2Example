import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: "app/template/test.html"
})

export class AppComponent {
    title = "Angular 2 Example :D";

    randomStuff() {
        return "LOL"
    }
}
