import {NumberCollection, Collection} from './Collections'

// these are the properties that an object MUST have to be processed by the BubbleSorter class..
export interface Sortable {
    length: number,
    data: any,
    swap(leftInd: number, rightInd: number) : void,
    compare(leftInd: number, rightInd: number) : boolean,
}

export class BubbleSorter{

    constructor(public collection: Sortable ){ // REVIEW 
        this.collection = collection
    }

    // this method usesd the Sortable object's own methods to sort
    // the Sortable object, thus mutating the Sortable object directly
    getSortedAscending(): void {
        const {length} = this.collection
        
        for (let i=0 ; i < length; i++) {
            for (let j=0 ; j < length-i-1; j++) {
                if (this.collection.compare(j, j+1)) {
                    this.collection.swap(j, j+1)
                }
            }
            // console.log(`post sorting colleciton: [${this.collection.data}]`);
        }
    }
}