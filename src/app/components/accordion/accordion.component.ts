import { Component, OnInit  , Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'] ,
  encapsulation : ViewEncapsulation.None
})
export class AccordionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.links)
  }

  @Input() links : [];

  @Input() linksName : [];
   @Input() title : string ;

}
