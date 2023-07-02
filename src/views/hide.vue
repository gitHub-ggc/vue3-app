<script setup lang="ts">
import Nav from "@/views/components/nav.vue";

import {ref} from 'vue';

const title = ref('隐私政策');
</script>

<template>
  <div>
     <Nav :title="title"></Nav>
  </div>
</template>

<style scoped>

</style>
