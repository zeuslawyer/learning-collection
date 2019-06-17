interface Quote {
    author: string
    text: string
}


export class Inspiration {
   private  quote: Quote 
   
   constructor(quote?: Quote){
       if(!quote) {
        this.quote = {
            author: 'confucious',
            text: 'If you fail to attain your goals, change your approach, not your goals.'
        }
       } else{
           this.quote = quote
       }
       
   }

   getQuote(): Quote  {
    return this.quote
   }

   setQuote(author: string, text: string ): void | never {
       this.quote = {author, text}

   }

   generateQuote(): Quote {
       return this.quote
   }
}

export const q = new Inspiration().generateQuote();


