class BubbleSorter{

    constructor(public collection: number[]){
        this.collection = collection
    }

    getSortedAscending(): number[] {
        const {length} = this.collection
        
        for (let i=0 ; i < length; i++) {
            for (let j=0 ; j < length-i-1; j++) {
                if (this.collection[j] > this.collection[j+1]) {
                    //swap
                    let leftHandNum =this.collection[j]
                    this.collection[j] = this.collection[j+1]
                    this.collection[j+1] = leftHandNum
                }
            }
        }
        return this.collection
    }


}

const sorter = new BubbleSorter([10,3,-10, -7, 14, 4])
console.log(sorter.collection)
console.log(sorter.getSortedAscending())