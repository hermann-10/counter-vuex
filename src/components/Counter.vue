<template>
  <div>
    <h2>{{ currentValue }}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        currentValue: 0
      }
    },   
  }
</script>

<style lang="scss" scoped>

</style>