<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <span>resumo budget</span>
    <span>tabela gastos</span>
    <span>tabela tasks</span>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
