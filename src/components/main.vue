<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-card>
          <v-card-title v-if="is_def_pokemon_set">{{defense_pokemon.name}}</v-card-title>
          <v-card-title v-else>調整するポケモンを選択してください</v-card-title>
          <v-card-actions><v-btn color="primary" rounded @click="new_defense_pokemon_click">ポケモンを選択する</v-btn></v-card-actions>
        </v-card>
        <v-col>
          <V-card>
            <v-card-title>ウーラオス(いちげきのすがた)</v-card-title>
          </V-card>
          <v-card>
            <v-card-title>ファイヤー(ガラルのすがた)</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import {Vue} from 'vue-property-decorator';
import Pokemon_defense from '../object/pokemon_defense';
import Pokemon_attack from '../object/pokemon_attack'

export default class main extends Vue{
  defense_pokemon: Pokemon_defense = new Pokemon_defense();
  is_def_pokemon_set: boolean = false;
  attack_pokemon: Pokemon_attack[];

/*  new_defense_pokemon(id: number, form: number){
    this.defense_pokemon = new Pokemon_defense(id, form);
    this.is_def_pokemon_set = true;
  }*/

  new_attack_pokemon(id: number, form: number){
    this.attack_pokemon.push(new Pokemon_attack(id,form));
  }

  new_defense_pokemon_click(){
    this.defense_pokemon.pokemon_set(385,0).then(r => {console.log(r)})
    this.is_def_pokemon_set = true;
  }
}
</script>

<style scoped>

</style>