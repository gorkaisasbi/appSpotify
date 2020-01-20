import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista : any = {};
  tracks : any = {};

  constructor(private activatedRoute : ActivatedRoute, public spotifyService : SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(map( resp=>{

          this.spotifyService.getArtista(resp.id).subscribe(artista =>{
              this.artista = artista;
          });
          this.spotifyService.getTop(resp.id).pipe(map((resp: any) =>{
              this.tracks = resp.tracks;
              console.log(this.tracks);
          })).subscribe();

    })).subscribe();
  }

}
