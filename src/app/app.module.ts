import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';
import { CategorieVoiturePipe } from './categorie-voiture.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    CategorieVoiturePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]//Componnent de Demarage
})
export class AppModule { }
