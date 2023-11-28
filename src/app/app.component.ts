import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pana-style';
  accordionItems = [
    { title: 'Section 1' },
    { title: 'Section 2' },
    { title: 'Section 3' },
  ];
}
