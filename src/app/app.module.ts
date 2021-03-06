import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducer } from './store/reducer';
import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({
            groceryList: reducer
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
