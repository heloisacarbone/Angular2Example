import {Component} from '@angular/core';
import {MenuOption} from './menu-option';
import {OPTIONS} from './mocks';

@Component({
    selector: 'my-app',
    templateUrl: "app/template/menu.html"
})

export class AppComponent {
    menuOptions: MenuOption[];
    ngOnInit() {
        //TODO: Verificar o que da para fazer para salvar a edição na mock
        this.menuOptions = OPTIONS;
    }
}
