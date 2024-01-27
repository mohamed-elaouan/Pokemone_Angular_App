import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./Components/header/header.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { VoitureModule } from "./voiture/voiture.module";
import { VoitureService } from "./voiture/voiture.service";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    // import le Voiture Module
    VoitureModule,
    //toujours tu dois mettre AppRouting en dernierement
    AppRoutingModule,
  ],
  providers: [VoitureService],
  bootstrap: [AppComponent], //Componnent de Demarage
})
export class AppModule {}
