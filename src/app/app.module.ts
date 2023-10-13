import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldNgifComponent } from './hello-world-ngif/hello-world-ngif.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { OnlineShopComponent } from './online-shop/online-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloWorldNgifComponent,
    ParentComponent,
    ChildComponent,
    OnlineShopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
