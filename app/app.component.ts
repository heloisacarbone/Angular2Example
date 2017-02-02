import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: "app/template/test.html"
})

export class AppComponent {
    title = "Angular 2 Example :D";
    tickets = [
            {
                id: 1,
                name: "Learning how to do",
                time: "200hs"
            },
            {
                id: 2,
                name: "Improviments",
                time: "100hs"
            }
    ];
}
