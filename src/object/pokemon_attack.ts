import axios from "axios";
import Pokemon_common from "@/object/Pokemon_common";

export default class Pokemon_defense extends Pokemon_common {
    private _name: string;
    private _type: string[];
    private _ability: string[];
    private _defense_a_ev: number;
    private _defense_c_ev: number;
    private _defense_a_base: number;
    private _defense_c_base: number;
    private _defense_a_real: number;
    private _defense_c_real: number;

    constructor(id: number,form: number) {
        super();
        this.pokemon_set(id, form)
        this.defense_a_ev = 0
        this.defense_c_ev = 0
    }

    set defense_a_ev(ev:number){
        this._defense_a_ev = ev
        this._defense_a_real = super.Etc_real_calculation(this._defense_a_base,ev)
    }

    set defense_c_ev(ev:number){
        this._defense_c_ev = ev
        this._defense_c_real = super.Etc_real_calculation(this._defense_c_base,ev)
    }

    get defense_a_ev(){
        return this._defense_a_ev
    }

    get defense_c_ev(){
        return this._defense_c_ev
    }

    get defense_a_real(){
        return this._defense_c_real
    }

    get defense_c_real(){
        return this._defense_c_real
    }

    get name(){
        return this._name
    }

    get type(){
        return this._type
    }

    get ability(){
        return this._ability
    }

    async pokemon_set(id:number, form: number){
        await axios
            .get('https://api.sasakirione.com/pokemon-test/pokemonDec?id='+id+'&form='+form)
            .then(response => (
                this._name = response.data.Items[0].NAME,
                    this._type = response.data.Items[0].TYPE,
                    this._ability = response.data.Items[0].ABILITY,
                    this._defense_a_base = response.data.Items[0].BASE.A,
                    this._defense_c_base = response.data.Items[0].BASE.C
            ))
            .catch(error => {
                console.log(error)
            })
    }
}
