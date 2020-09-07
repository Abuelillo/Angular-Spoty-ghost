import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent  {

  //paises:any[] = [];

  /*constructor(private http:HttpClient) { 
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
        .subscribe((resp:any)=>{
          this.paises = resp;
        })
  }*/

  nuevasCanciones : any[] = [];
  loading         : boolean;
  error           : boolean;
  mensajeError    : string;

  constructor(private spotyfy:SpotifyService) {

    this.loading = true;
    this.error = false;
    

    this.spotyfy.getNewRealeses().subscribe((data:any) =>{
      //console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    },(errorServicio)=>{
      this.loading = false;
      this.error = true;
      this.mensajeError = errorServicio.error.error.message;
    });
  }


}
