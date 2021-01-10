<template>
  <div>
    <h2>Counter : {{ currentValue }}</h2>
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
    methods: {
      increment() {
        this.currentValue = this.currentValue + 1;
      },
      decrement() {
        this.currentValue = this.currentValue - 1;
      }

    }  
  }
</script>

<style lang="scss" scoped>

</style>