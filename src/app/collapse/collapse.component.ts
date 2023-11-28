import { Component, Input } from '@angular/core';

@Component({
  selector: 'Collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent {
  @Input() accordionItems: {title:string}[] = [];
  index!:number;
  accordionClick(index:number){
    this.index = index;
  }
  ngOnInit() {
  }
}
