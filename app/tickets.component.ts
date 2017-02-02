import {Component} from 'angular2/core';

@Component({
    selector: 'my-tickets',
    templateUrl: "app/template/tickets.html"
})

export class TicketsComponent {
    tickets = [
            {
                id: 1,
                name: "Learning how to do",
                time: "200hs",
                price: 4.88
            },
            {
                id: 2,
                name: "Improviments",
                time: "100hs",
                price: 12.66
            }
    ];
}
