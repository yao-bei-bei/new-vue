<template>
   <div id="secondChild">
     <div>这是secondChild组件</div><br/>
     <div>获取值：{{msg}}<br>{{box}}</div>
   </div>
</template>

<script>
  // import bus from 'src/assets/eventBus'
    export default {
        name: "secondChild",
      data(){
          return {
            msg:'默认值',
            box:'默认值1'
          }
      },
      mounted(){
          var self=this;
          this.$bus.$on('firstclick',(msg)=>{
            self.msg=msg;
          })
        this.$bus.$on('boxclick',(msg)=>{
          self.box=msg;
        })

      }
    }
</script>

<style scoped>
#secondChild{
  margin-top: 20px;
}
</style>
