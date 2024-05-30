export default class TSor {
    #termekObjektum = {};
    #szuloElem;
    #sorElem;
    #torlesElem;
    constructor(termekObjektum, szuloElem) {
        this.#termekObjektum = termekObjektum;
        this.#szuloElem = szuloElem;
        this.#sorokLetrehozasa();
        this.#torlesElem=this.#szuloElem.children("tr:last-child").children("td").children(".torol")
        console.log(this.#torlesElem)
        this.#torlesElem.on("click",()=>{
            /* nyilt fgv kell mert ekkor jelenti az osztalypeldanyt */
            this.#trigger("torol")
        })
    }
} 

#trigger(esemenynev){
        const e= new CustomEvent(esemenynev, {detail:this.#termekObjektum.id})
        window.dispatchEvent(e)
}

#sorokLetrehozasa(){
    let txt = `<tr>`;
    for (const key in this.#termekObjektum) {
        txt += `<td>${this.#termekObjektum[key]}</td>`;
    }
    txt += `<td><button class="torol">🗑️</button></td>`;
    txt += `</tr>`;
    this.#szuloElem.append(txt);
}