class Collection {
    length: number;
    protected data: any

    constructor(collection: any){
        this.length = collection.length
        this.data = collection
    }

    getData(){
        return this.data
    }


}

export class NumberCollection extends Collection{
    
    constructor(protected data: number[]){
        super(data)
        this.data = data
    }
}

export class JSObjectCollection extends Collection{

    constructor(protected data: object[]){
        super(data)
        this.data = data
    }
}
