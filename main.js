import DataService from "./MODEL/DataService.js";
import Tablazat from "./VIEW/Tablazat.js";
import { emberekLISTA } from "./adat.js";

const DS= new DataService()
DS.getAdat("http://localhost:3000/emberekLISTA", megjelenit)

function megjelenit(LISTA){
    console.log(LISTA)
    new Tablazat(LISTA, $(".tablazat"))
}
/* itt tudunk torolni */
/* fel kell iratkozni a torol esemenyre  */
$(window).on("torol"),(event)=>{
    console.log(event.detail)
    DS.deleteAdat("http://localhost:3000/emberekLISTA", event.detail)

}