import { Invoice } from "../model/invoice";

export const invoiceData:Invoice = {
    id:"001",
    company:{
        ruc:"17228577001",
        name: "ClearMinds Consultores",
        adress: {
            city:"Quito",
            principalStreet:"Juan Pablo Sanz",
            secondaryStreet:"Iñaquito",
            code:"N-57"
        },
    },
    customer:{
        id:"1727039922",
        name:"Kelvin",
        surname:"Bermeo",
        adress:{
            city:"Quito",
            principalStreet:"Carlos Mantilla",
            secondaryStreet:"SI",
            code:"ES-11 "
        },
    },
    items:[
        { 
            id:500,
            product:{
                id:1,
                name:"Papitas",
                price:20,
                description:"Mamahuevo",
                category:{
                    id:202,
                    name:"Chuches"
                },
            },
            quantity:12,
        },
        { 
            id:501,
            product:{
                id:2,
                name:"Doritos",
                price:10,
                description:"Mamahuevo",
                category:{
                    id:203,
                    name:"Chuches"
                },
            },
            quantity:34,
        },
        { 
            id:502,
            product:{
                id:3,
                name:"Chifles",
                price:23,
                description:"Mamahuevo",
                category:{
                    id:204,
                    name:"Chuches"
                },
            },
            quantity:7,
        }
    ],
}