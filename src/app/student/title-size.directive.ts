import { Directive } from '@angular/core';

@Directive({
  selector: '[appTitleSize]',   
  host: {
    '[style.font-size]': '"20px"',
  }
})

export class TitleSizeDirective {

  constructor() { }

}
