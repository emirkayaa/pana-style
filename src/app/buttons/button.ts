export class Button {
    id!: number;
    type!: string;
    name!: string;
    class!: string;
    text!: string;

    constructor(id:number ,name: string, styleClass: string,type:string,text:string) {
        this.id = id;
        this.name = name;
        this.class = styleClass;
        this.type = type;
        this.text = text;
      }
}