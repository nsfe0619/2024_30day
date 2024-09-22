import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementModule } from './shared/component/form/element/element.module';
import { MainComponent } from './pages/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        ElementModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
