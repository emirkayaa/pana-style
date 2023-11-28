import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TagComponent } from './tag/tag.component';
import { CollapseComponent } from './collapse/collapse.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    TagComponent,
    CollapseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
