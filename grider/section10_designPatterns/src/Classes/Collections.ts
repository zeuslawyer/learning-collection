import {BubbleSorter, Sortable} from './Sorter'


export class NumberCollection extends BubbleSorter {
    
    constructor( public data: number[]){
        super()
    }

    get length(){
        return this.data.length
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

 export class StringCollection extends BubbleSorter {
     length: number;  // alt implementation. does not use getter
     
     constructor(public data: string){
        super()
        this.length = data.length
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


export  class JSObjectCollection extends BubbleSorter{

    constructor(public data: object[]){
        super()
    }

    get length(){
        return this.data.length
    }

    compare(){
        return true  // no implementation right now....
    }

    swap(){

    }
}