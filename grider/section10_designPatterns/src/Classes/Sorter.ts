import {NumberCollection, Collection} from './Collections'

// these are the properties that an object MUST have to be processed by the BubbleSorter class..
export interface Sortable {
    length: number,
    data: any,
    swap(leftInd: number, rightInd: number) : void,
    compare(leftInd: number, rightInd: number) : boolean,
}



export abstract class BubbleSorter{ 
    /* create abstract fields and methods so that references to this in the sort() method dont throw errors*/
    abstract length: number;
    abstract compare(leftInd: number, rightInd: number): boolean ; 
    abstract swap(leftInd: number, rightInd: number): void ;

    // this method usesd the Sortable object's own methods to sort
    // the Sortable object, thus mutating the Sortable object directly
    getSortedAscending(): void {
        const length = this.length
        
        for (let i=0 ; i < length; i++) {
            for (let j=0 ; j < length-i-1; j++) {
                if (this.compare(j, j+1)) {
                    this.swap(j, j+1)
                }
            }
            // console.log(`post sorting colleciton: [${this.collection.data}]`);
        }
    }
}