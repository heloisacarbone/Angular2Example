System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var OPTIONS, TICKETS;
    return {
        setters:[],
        execute: function() {
            exports_1("OPTIONS", OPTIONS = [
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
            ]);
            exports_1("TICKETS", TICKETS = [
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
            ]);
        }
    }
});
//# sourceMappingURL=mocks.js.map