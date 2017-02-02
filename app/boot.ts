import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {TicketsComponent} from './tickets.component';

@NgModule({
    declarations: [
        bootstrap,
        AppComponent,
        TicketsComponent
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [
        AppComponent
    ]
})

bootstrap(AppComponent)
