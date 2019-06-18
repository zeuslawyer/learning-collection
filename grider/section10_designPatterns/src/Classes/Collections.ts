export class Collection {
    length: number;
    data: any

    constructor(collection: any){
        this.length = collection.length
        this.data = collection
    }
}

export class NumberCollection extends Collection {
    
    constructor( data: number[]){
        super(data)
    }

    compare(leftInd: number, rightInd: number): boolean {
        return this.data[leftInd] > this.data[rightInd];
    }

    swap(leftInd: number, rightInd: number): void {
        const leftHandVal = this.data[leftInd]
        this.data[leftInd] = this.data[rightInd];
        this.data[rightInd] = leftHandVal
    }

    getData(){
        return this.data
    }
}

 export class StringCollection extends Collection{
     constructor(public data: string){
        super(data)
     }

     compare(leftInd: number, rightInd: number): boolean{
         // make everything lower case to sort alphabetically, as upper case as different ASCII value that wont work for sorting alphabetically
        return this.data[leftInd].toLowerCase() > this.data[rightInd].toLowerCase()
     }

     swap(leftInd: number, rightInd: number): void {
         // string characters are readable only with sq bracket notation
        let characters = this.data.split('')
        const leftHandVal = characters[leftInd]
        characters[leftInd] = characters[rightInd];
        characters[rightInd] = leftHandVal

        this.data = characters.join('');
     }

 }


export class JSObjectCollection extends Collection{

    constructor( data: object[]){
        super(data)
        this.data = data
    }

    compare(){

    }

    swap(){

    }
}
