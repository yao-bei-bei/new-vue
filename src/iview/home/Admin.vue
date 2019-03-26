<template>
  <div id="admin">
1111
    <!--<my-component></my-component>-->
  </div>
</template>

<script>
import { apiAddress } from '@/request/api';// 导入我们的api接口
export default {
  name: 'admin',
  data(){
    return{
    }
  },
  mounted(){

  },
  created(){
    let data=1;
    this.onLoad(data);
  },
  components: {
    'my-component': {
      template: `<div>111</div>`,
    }
  },
  methods:{

    onLoad(data) {
      // this.$api.article.articleList().then(res=> {
      //   // 执行某些操作
      //   console.log(res)
      // })
       apiAddress().then(res=>{
      })
    }
  }
}
</script>

<style>
</style>
