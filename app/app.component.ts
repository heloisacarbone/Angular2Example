import {Component} from 'angular2/core';
import {MenuOption} from './menu-option';
import {OPTIONS} from './mocks';

@Component({
    selector: 'my-app',
    templateUrl: "app/template/menu.html"
})

export class AppComponent {
    menuOptions: MenuOption[];

    setActiveMenu(opt) {
        this.menuOptions = this.menuOptions.map((m) => {
            if (m.title === opt.title) {
                m.active = true;
            } else {
                m.active = false;
            }
            return m;
        });
    }

    ngOnInit() {
        //TODO: Verificar o que da para fazer para salvar a edição na mock
        this.menuOptions = OPTIONS;
    }
}
