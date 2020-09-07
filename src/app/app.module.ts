import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//servicios
//import { SpotifyService } from './services/spotify.service'; //si enel servicio tiene providerIn:root no hace falta

//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/compartido/navbar/navbar.component';

//modulos
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './app.routes';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetaComponent } from './components/compartido/tarjeta/tarjeta.component';
import { LoadingComponent } from './components/compartido/loading/loading.component'; //importacion rutas
import { DomseguroPipe } from './pipes/domseguro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetaComponent,
    LoadingComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [],//[SpotifyService],//si enel servicio tiene providerIn:root no hace falta
  bootstrap: [AppComponent]
})
export class AppModule { }
