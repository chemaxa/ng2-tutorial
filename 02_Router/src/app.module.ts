import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListsModule, routes } from './lists/index';

@NgModule({
    imports: [
        BrowserModule,
        ListsModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }