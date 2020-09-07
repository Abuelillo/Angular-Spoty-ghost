import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query:string){
    const url =`https://api.spotify.com/v1/${query}`;
    const token = 'BQD8m4-C5KrlWGEz8qwvPGDfTdlYUpr0Mr3nCvOd7by6bb1gfk7O_4F-aD_Gj913m6etWH64NZbhEJLJyhg';

    const headers = new HttpHeaders({
      'Authorization':`Bearer ${token}`
    });    
    return this.http.get(url,{headers});
  }

  getNewRealeses(){

    return this.getQuery('browse/new-releases').pipe(map(data =>data['albums'].items));
   
  };

  getArtistas(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist`).pipe(map(data => data['artists'].items));    
                    
  }
  
  getArtista(id:string){

    return this.getQuery(`artists/${id}`);    
    
  }

  getTopTrack(id:string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map(data => data['tracks'])); 
    
  }
}
