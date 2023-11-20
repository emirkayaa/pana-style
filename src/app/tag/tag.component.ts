import { Component, Input } from '@angular/core';
import { Tag } from './tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent{
  @Input() type:string = '';
  @Input() text:string = '';
  @Input() tagWidth:string = 'md';
  @Input() rounded:string = 'none';
  tag : Tag = {id:1,classList:'',type:'',text:''};

  tagWidths: {[key:string]:string} = {
    sm:'5%',
    md:'8%',
    lg:'12%',
    xl:'16%',
  }

  roundeds: {[key:string]:string} = {
    none:'',
    sm:'5px',
    md:'10px',
    lg:'15px',
    xl:'20px',
  }
  
  ngOnInit(): void {
    this.tag = this.crateTag(this.type,this.text);
  }
  click(tag:Tag):void{
    console.log(tag);
  }

 private crateTag(type:string,text:string): Tag{
    switch (type) {
      case 'danger':
        return { id: 1, classList:'bg-red-500 text-white font-medium   dark:bg-red-900 dark:text-red-300', type: 'danger',text:text };
      case'danger-outline':
        return { id: 2, classList:'bg-red-100 text-red-800 border border-1 border-red-500 font-medium   dark:bg-red-900 dark:text-red-300', type: 'danger-outline',text:text };
      case 'success':
        return { id: 3, classList:'bg-green-500 text-white font-medium   dark:bg-green-900 dark:text-green-300', type: 'success',text:text };
      case 'success-outline':
        return { id: 4, classList:'bg-green-100 text-green-800 border border-1 border-green-500 font-medium   dark:bg-green-900 dark:text-green-300', type: 'success-outline',text:text };
      case 'warning':
        return { id: 5, classList:'bg-yellow-500 text-white font-medium   dark:bg-yellow-900 dark:text-yellow-300', type: 'warning',text:text };
      case 'warning-outline':
        return { id: 6, classList:'bg-yellow-100 text-yellow-800 border border-1 border-yellow-500 font-medium   dark:bg-yellow-900 dark:text-yellow-300', type: 'warning-outline',text:text };
      case 'primary':
        return { id: 7, classList:'bg-blue-500 text-white font-medium   dark:bg-blue-900 dark:text-blue-300', type: 'primary',text:text };
      case 'primary-outline':
        return { id: 8, classList:'bg-blue-100 text-blue-800 border border-1 border-blue-500 font-medium   dark:bg-blue-900 dark:text-blue-300', type: 'primary-outline',text:text };    
      case 'secondary':
        return { id: 9, classList:'bg-gray-500 text-white font-medium   dark:bg-gray-900 dark:text-gray-300', type: 'secondary',text:text };
      case 'secondary-outline':
         return { id: 10, classList:'bg-gray-100 text-gray-800 border border-1 border-gray-500 font-medium   dark:bg-gray-900 dark:text-gray-300', type: 'secondary-outline',text:text };
      case 'info':
        return { id: 11, classList:'bg-indigo-500 text-white font-medium   dark:bg-sky-900 dark:text-sky-300', type: 'info',text:text };         
      case 'info-outline':
        return { id: 12, classList:'bg-indigo-100 text-indigo-800 border border-1 border-indigo-500 font-medium   dark:bg-sky-900 dark:text-sky-300', type: 'info-outline',text:text };  
        default:
        return { id: 13, classList: '', type: '' ,text:''};
    }
  }

}
