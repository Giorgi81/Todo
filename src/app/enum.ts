import { CurrencyPipe } from "@angular/common"
import { UrlSerializer } from "@angular/router"

enum Directions {

    Up = 12,
    Down = 25,
    Left = 46,
    Right =99
}

console.warn(Directions.Down)


interface User  {

    fName:string,
    lName: string,
    age: number,
    startTrial: (x:string) =>  string,
    getCupon : (cuponFeatures: string) => string

}


const giorgi:User = {
    fName: 'Giorgi',
    lName: 'Jgerenaia',
    age: 18,
    startTrial: (x:string) => {return x},
    getCupon: (cuponFeatures: string) => {return cuponFeatures},
    address: 'Tbilisi',
    sale : ( money: number) => {return money - money * 25 / 100} ,

    device : 'MacOs',
    
    
    
    
    
}
const fullName:string = giorgi.startTrial('Giorgi jgerenaia')
const cuponFeatures = giorgi.getCupon('Lorem text')
const saleDicount = giorgi.sale(150)

interface User {

    address: string,
    sale: (money: number) => number,
    device: string ,
    
    

}

interface Admin extends User {
    role: 'Admin' | 'Moderator' | 'Student'
}