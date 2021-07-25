<template>
  <div>
    <v-app>
      <pokemon_header></pokemon_header>
      <router-view/>
      <pokemon_footer></pokemon_footer>
    </v-app>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import pokemon_header from '@/components/pokemon_header.vue';
import pokemon_footer from '@/components/pokemon_footer.vue';

@Component({
  components: {
    pokemon_header,
    pokemon_footer
  },
})
export default class App extends Vue {
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
