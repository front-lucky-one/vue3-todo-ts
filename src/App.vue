<template>
  <div class="wrapper">
    <AppHeader />
    <AppMain />
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import AppMain from '@/components/AppMain.vue';

export default defineComponent({
  name: 'App',
  components: {
   AppHeader,
   AppMain
  }
});
</script>

<style lang="scss">
#app {
  font-family: 'Poppins';
  font-size: 12px;
}
</style>
