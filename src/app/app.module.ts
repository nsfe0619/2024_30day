import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementModule } from './shared/component/form/element/element.module';
import { MainComponent } from './pages/main/main.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ElementModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
