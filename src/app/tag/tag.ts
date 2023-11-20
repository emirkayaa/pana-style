export class Tag{
    id!: number;
    classList: string;
    type!: string;
    text!:string;

    constructor(id:number ,styleClass: string,type:string,text:string) {
    this.id = id;
    this.classList = styleClass;
    this.type = type;
    this.text = text;
    }
}