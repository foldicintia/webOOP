import TSor from "./TSor.js";

export default class Tablazat {
    #LISTA = [];
    #szuloElem;
    #tbodyElem;
    constructor(LISTA, szuloElem) {
        this.#LISTA = LISTA;
        this.#szuloElem = szuloElem;
        this.#tablazatMegjelenit();
        this.#tbodyElem = this.#szuloElem.children("table").children("tbody");
        console.log(this.#tbodyElem);
        this.#sorokHozzaadasa();
    }

    #tablazatMegjelenit() {
        let txt = "";
        txt += "<table class='table table-striped'>";
        txt += "<tr><th>ID</th><th>Név</th><th>Kor</th><th>Nem</th><th></th></tr>";
        txt += "</table>";
        this.#szuloElem.append(txt);
    }

    #sorokHozzaadasa() {
        this.#LISTA.forEach((element) => {
            new TSor(element,this.#tbodyElem)
          });
    }
}