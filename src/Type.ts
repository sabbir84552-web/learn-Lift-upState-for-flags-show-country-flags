
export interface CountryType{
    name:{
        common:string,
        official:string
    }
    ccn3:{
        ccn3:string
    }
    flags:{
        flags:{
            png:string,
            alt:string
        }
    }
    population:{
        population:number
    }
    capital:{
        capital:string[]
    }
    languages:{
        languages:Record<string,string>;
    }
    currencies:{
        currencies:Record<string,{
            name:string;
            symbol:string
        }>;

        }

}

