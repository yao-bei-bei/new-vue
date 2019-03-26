<template>
   <div>
     <div>这是child组件</div>
     <div>{{message}}</div>
     <button @click="box">向父元素传递值</button>
   </div>
</template>

<script>
    export default {
      props:["message"],
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        created() {
        },
      methods:{
        box(){
          this.$emit('clickEvet','box页面');
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
