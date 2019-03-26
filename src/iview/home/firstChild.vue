<template>
   <div id="firstChild">
     <div>这是firstChild组件</div>
     <button @click="first">向组件传值</button>
     <button @click="box">向组件传值1</button>
   </div>
</template>

<script>
  // import but from '../assets/eventBus'
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        created() {

        },
      methods:{
        first(){
          this.$bus.$emit('firstclick','这是firstChild组件')
        },
        box(){
          this.$bus.$emit('boxclick','这是firstChild组件1')
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#firstChild{
  margin-top: 20px;
}
</style>
