import axios from "axios";
import Pokemon_common from "@/object/Pokemon_common";

export default class Pokemon_defense extends Pokemon_common{
    private _name: string;
    private _type: string[];
    private _ability: string[];
    private _defense_h_ev: number;
    private _defense_b_ev: number;
    private _defense_d_ev: number;
    private _defense_h_base: number;
    private _defense_b_base: number;
    private _defense_d_base: number;
    private _defense_h_real: number;
    private _defense_b_real: number;
    private _defense_d_real: number;

    constructor(id: number,form: number) {
        super();
        axios
            .get('https://api.sasakirione.com/pokemon-test/pokemonDec?id='+id+'&form='+form)
            .then(response => (
                this._name = response.data.Items[0].NAME,
                this._type = response.data.Items[0].TYPE,
                this._ability = response.data.Items[0].ABILITY,
                this._defense_h_base = response.data.Items[0].BASE.H,
                this._defense_b_base = response.data.Items[0].BASE.B,
                this._defense_d_base = response.data.Items[0].BASE.D
            ))
            .catch(error => {
                console.log(error)
            })
            this.defense_h_ev = 0
            this.defense_b_ev = 0
            this.defense_d_ev = 0
    }

    set defense_h_ev(ev:number){
        this._defense_h_ev = ev
        this._defense_h_real = super.HP_real_calculation(this._defense_h_base,ev)
    }

    set defense_b_ev(ev:number){
        this._defense_b_ev = ev
        this._defense_b_real = super.Etc_real_calculation(this._defense_b_base,ev)
    }

    set defense_d_ev(ev:number){
        this._defense_d_ev = ev
        this._defense_d_real = super.Etc_real_calculation(this._defense_d_base,ev)
    }

    get defense_h_ev(){
        return this._defense_h_ev
    }

    get defense_b_ev(){
        return this._defense_b_ev
    }

    get defense_d_ev(){
        return this._defense_d_ev
    }

    get defense_h_real(){
        return this._defense_h_real
    }

    get defense_b_real(){
        return this._defense_b_real
    }

    get defense_d_real(){
        return this._defense_d_real
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
}
