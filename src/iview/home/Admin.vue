<template>
  <div id="admin" style="padding-top: 64px">
    <!--<my-component></my-component>-->
    <Scroll :on-reach-edge="handleReachEdge" height="height: 500px">
      <Card dis-hover v-for="(item, index) in list3" :key="index" style="margin: 32px 0" >
        Content {{ item }}
      </Card>
    </Scroll>
  </div>
</template>

<script>
  import article from '@/api/article';
export default {
  name: 'admin',
  data(){
    return {
      list3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  mounted(){

  },
  created(){
    this.onLoad();
  },
  components: {
    'my-component': {
      template: `<div>111</div>`,
    }
  },
  methods:{
    onLoad() {
      article.articlenew().then(res=>{
        console.log(res.data)
      })
      // this.$jsonp('https://api.map.baidu.com/location/ip',{
      //   ak: "PUe0i0BRG7OW9zl24PDE301phNSLn4Sx",
      //   coor: "bd09ll",
      // }).then(data =>{
      //   console.log(data);
      // })

    },
   handleReachEdge (dir) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (dir > 0) {
          const first = this.list3[0];
          for (let i = 1; i < 11; i++) {
            this.list3.unshift(first - i);
          }
        } else {
          const last = this.list3[this.list3.length - 1];
          for (let i = 1; i < 11; i++) {
            this.list3.push(last + i);
          }
        }
        resolve();
      }, 2000);
    });
  }
  }
}
</script>

<style scoped>
.ivu-scroll-container{
  height: auto;
  overflow-y: auto;
}
</style>
