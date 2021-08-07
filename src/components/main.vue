<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-card v-if="is_def_pokemon_set">
          <v-card-title>{{defense_pokemon.get_name()}}</v-card-title>
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

export default class main extends Vue{
  defense_pokemon: Pokemon_defense;
  is_def_pokemon_set: boolean = false;

  new_defense_pokemon(id: number, form: number){
    this.defense_pokemon = new Pokemon_defense(id,form)
    this.is_def_pokemon_set = true
  }

  new_defense_pokemon_click(){
    this.new_defense_pokemon(385,0)
  }
}
</script>

<style scoped>

</style>