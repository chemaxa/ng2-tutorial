import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    value: number = 40;

    increase() {
        this.value++;
    }

    decrease() {
        this.value--;
    }
}