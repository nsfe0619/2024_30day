import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementModule } from './shared/component/form/element/element.module';
import { MainComponent } from './pages/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MockInterceptor } from './core/intercept/mock.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        ElementModule
    ], providers: [
        { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
