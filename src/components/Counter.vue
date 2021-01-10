<template>
  <div>
    <h2>Counter : {{ currentValue }}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>

  </div>
</template>

<script>

  export default {
    methods: {
      increment() {
        this.$store.commit('INCREMENT_COUNTER');
      },
      decrement() {
        this.$store.commit('DECREMENT_COUNTER');
      }
    },
    computed: { //retourner le morceau d'état qu'on souhaite afficher
      currentValue(){
        return this.$store.state.currentValue;
      }
    } 
  };
</script>

<style lang="scss" scoped>

</style>