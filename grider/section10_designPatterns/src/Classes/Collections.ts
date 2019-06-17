export class Collection {
    length: number;
    protected data: any

    constructor(collection: any){
        this.length = collection.length
        this.data = collection
    }
}

export class NumberCollection extends Collection {
    
    constructor(protected data: number[]){
        super(data)
        this.data = data
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

export class JSObjectCollection extends Collection{

    constructor(protected data: object[]){
        super(data)
        this.data = data
    }
}
