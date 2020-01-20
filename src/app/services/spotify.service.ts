import { Injectable } from '@angular/core';
import	{	HttpClient,HttpHeaders }	from	"@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  artistas: any[] = [];

  urlSpoti : string = "https://api.spotify.com/v1/";
  token : string = "BQCmd4C3a6zes5NXDtvCTtGFVs0ZHSqT7srB2a0gVMK-zu1SDUeSKUiRERX5YrVH4lJQfJzVVx8d-6Yn5qc";

  constructor(public http : HttpClient) {
    console.log("Servicio Spotify listo");
   }
   
   getArtistas(termino:string){

      let href=`${this.urlSpoti}search?q=${termino}&type=artist&offset=0&limit=20`;
      let headers = new HttpHeaders({
          "authorization":"Bearer "+this.token
      });
      return this.http.get(href,{headers}).pipe(map((resp: any) =>{
        this.artistas = resp.artists.items;
        return this.artistas;
      }));
   }

   getArtista(id:string){

      let href=`${this.urlSpoti}artists/${id}`;
      let headers = new HttpHeaders({
          "authorization":"Bearer "+this.token
      });
      return this.http.get(href,{headers});
   }


   getTop(id:string){
    let href=`${this.urlSpoti}artists/${id}/top-tracks?country=ES`;
    let headers = new HttpHeaders({
        "authorization":"Bearer "+this.token
    });
    return this.http.get(href,{headers});
   }
}
