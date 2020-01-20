import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {


  constructor(private sanitizer : DomSanitizer){
}

  transform(uri: string,url:string): any {
    
    return this.sanitizer.bypassSecurityTrustResourceUrl(url+uri);

  }

}
