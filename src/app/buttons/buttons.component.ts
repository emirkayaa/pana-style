
import { Component, Input } from '@angular/core';
import { Button } from './button';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Input() type: string = '';
  @Input() buttonWidth: string = 'md';
  button: Button = { id: 1, name: '', class: '', type: '' };
  buttonWidths: {[key:string]:string} = {
    sm:'30px',
    md:'70px',
    lg:'80px',
    xl:'95px',

  }

  ngOnInit() {
    this.button = this.createButton(this.type);
  }

  onButtonClick(button: Button): void {
    console.log(button);
    // Burada buton tıklama işlemlerini gerçekleştirebilirsiniz.
  }

  private createButton(type: string): Button {
    switch (type) {
      case 'primary':
        return { id: 1, name: 'primary', class: 'bg-blue-500 text-white hover:bg-blue-600 hover:text-white', type: 'primary', };
      case 'primary-outline':
        return  { id: 2, name: 'outline', class: 'bg-blue-200 border border-sky-500 text-blue-600 text-white hover:bg-blue-600 hover:text-white', type: 'primary-outline',};        
      case 'success':
        return { id: 3, name: 'success', class: 'bg-green-500 text-white hover:bg-green-600', type: 'success', };
      case 'success-outline':
        return { id: 4, name: 'outline', class: 'bg-green-200 border border-green-500 text-green-600 text-white hover:bg-green-600 hover:text-white', type: 'success-outline',};
      case 'danger':
        return { id: 5, name: 'danger', class: 'bg-red-500 text-white hover:bg-red-600', type: 'danger',};
      case 'danger-outline':
        return { id: 6, name: 'outline', class: 'bg-red-200 border border-red-500 text-red-600 text-white hover:bg-red-600 hover:text-white', type: 'danger-outline',};
      case 'warning':
        return { id: 7, name: 'warning', class: 'bg-yellow-500 text-white hover:bg-yellow-600', type: 'danger',};
      case 'warning-outline':
        return { id: 8, name: 'outline', class: 'bg-yellow-200 border border-yellow-500 text-yellow-600 text-white hover:bg-yellow-600 hover:text-white', type: 'warning-outline',};
      case 'secondary':
        return { id: 9, name: 'secondary', class: 'bg-gray-500 text-white hover:bg-gray-600', type: 'secondary',};
      case 'secondary-outline':
        return { id: 10, name: 'outline', class: 'bg-gray-200 border border-gray-500 text-gray-600 text-white hover:bg-gray-600 hover:text-white', type: 'secondary-outline',};
      case 'info':
        return { id: 11, name: 'info', class: 'bg-sky-500 text-white hover:bg-sky-600', type: 'info',};
      case 'info-outline':
        return { id: 12, name: 'outline', class: 'bg-sky-200 border border-sky-500 text-sky-600 text-white hover:bg-sky-600 hover:text-white', type: 'info-outline',};
        default:
        return { id: 1, name: '', class: '', type: '' ,};
    }
  }
}
