import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[] ): string {

    //console.log(images);
    if (!images) {
      return 'assets/img/cazafantasmas.png';
    } 
    if (images.length > 0) {
      return images[0].url;
    }else{
      return 'assets/img/cazafantasmas.png';
    }
  }

}
