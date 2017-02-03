import {Component} from '@angular/core';
import {Ticket} from './ticket';
import {TICKETS} from './mocks';

@Component({
    selector: 'my-tickets',
    templateUrl: "app/template/tickets.html"
})

export class TicketsComponent {
    tickets: Ticket[];

    /*ngOnInit is invoked after the component is contructed and is the best
    place to initialize property values*/
    ngOnInit() {
        this.tickets = TICKETS;
    }
}
