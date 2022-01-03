import { BehaviorSubject, delay, elementAt, startWith, Subject } from 'rxjs';
const filteredCities = new BehaviorSubject<string[]>([]);
const selectedCity = new BehaviorSubject<string>("");
let data:string[]=[];
// for(let i=0;i<100;i++){
//     data.push("city "+i)
//   }

  const jsonData:Ville[]= require('./villes.json'); 
   jsonData.forEach(element => {
     data.push(element.nom);
   });
   


export const citiesService = {
    filterCities: (query: string) =>filter(query),
    filteredCities$:()=>filteredCities.asObservable(),
    selectCity:(city:string)=>selectedCity.next(city),
    selectedCity$:()=>selectedCity.asObservable()

};


const filter = (query:String) => {


    if (query.length>2) {
      // Making a case insensitive regular expression
      const regex = new RegExp(`${query.trim()}`, 'i');
      // Setting the filtered film array according the query
      const result=data.filter((item) => item.search(regex) >= 0);
      let onlyFirstCities:string[]= [];
      let index=0;
      result.forEach(element => {
        if(index<3) onlyFirstCities.push(element);
        index++;
        
      });
      filteredCities.next( onlyFirstCities);

    } else {
      // If the query is null then return blank
      filteredCities.next([]);
    }
  };



  interface Ville{
    nom:string
  }