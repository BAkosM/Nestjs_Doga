export class Cat{
    id: number;
    suly: number;
    szem: string;

    constructor(id: number, suly: number, szem: string){
        this.id = id;
        this.suly = suly;
        this.szem = szem;
    }

    public get getId() :number {
        return this.id;
    }
    public get getSuly() :number {
        return this.suly;
    }
    public get getSzem() :string { 
        return this.szem;
    }
}