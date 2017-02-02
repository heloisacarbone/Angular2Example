import {Ticket} from './ticket';
import {MenuOption} from './menu-option';

export const OPTIONS: MenuOption[] = [
        {
            title: "Home",
            active: true,
            href: "home"
        },
        {
            title: "Add Tickets",
            active: false,
            href: "add"
        }
];

export const TICKETS: Ticket[] = [
        {
            id: 1,
            name: "A",
            time: "200hs",
            price: 4.88
        },
        {
            id: 2,
            name: "B",
            time: "100hs",
            price: 12.66
        },
        {
            id: 3,
            name: "C",
            time: "30hs",
            price: 100.66
        },
        {
            id: 4,
            name: "D",
            time: "1hs",
            price: 1000.0
        }
];
