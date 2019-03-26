<template>
    <div>
      <div>box页面</div>
      <button @click="boxs(data)">{{text}}{{is}}</button>
      <child :message="msg" @clickEvet="box"></child>
      <first-child v-if="isShow"></first-child>
      <second-child></second-child>
      {{isShow}}
{{getChangedNum}}
    </div>
</template>

<script>
  import Child from "./Child";
  import FirstChild from './firstChild'
  import SecondChild from './secondChild'
    export default {
        name: 'box',
      components: {
          Child,
        FirstChild,
        SecondChild,
      },
      data() {
            return {
                msg: 'Welcome to Your Vue.js App',
              is:true,
              text:'确定'
            }
        },


      methods:{
        box(data){
          this.msg=data;
          console.log(data)
        },
        boxs(){
          if(this.is){
            this.text='确定'
            this.is=false;
          }else{
            this.text='取消'
            this.is=true;
          }
        }
      },
      computed: {
        isShow() {
          return this.$store.getters.isShow
        },
        getChangedNum(){
          return this.$store.getters.getChangedNum
        }
      },
      watch: {
        is(value){
          if(value==true){
            this.$store.dispatch('showFooter');
            this.$store.dispatch('getNewNum',1);
          }else {
            this.$store.dispatch('hideFooter');
          }
        }

      },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
