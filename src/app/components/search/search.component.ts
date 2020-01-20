import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  termino : string='';

  constructor(public servicioSpoti : SpotifyService){
   
   }
   buscarArtista(){
      this.servicioSpoti.getArtistas(this.termino).subscribe();

   }

  ngOnInit() {
  }

}
