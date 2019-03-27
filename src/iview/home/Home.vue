<style scoped>
  .layout {
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
    min-height: 100vh;
  }
.ivu-layout{
  width: 100%;
}
  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }

  .menu-icon {
    transition: all .3s;
  }

  .rotate-icon {
    transform: rotate(-90deg);
  }

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 120px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0px;
    transition: width .2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
  .ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title{
    padding: 0;
  }
  .ivu-menu-dark{
    width: auto!important;
  }
  .ivu-menu-item{
    height: 50px!important;
  }
  .active{
    width: 100%!important;
    color: #2d8cf0!important;
    background: #363e4f!important;
  }
  .box{
    width: 100%;
    height: 84px;
    text-align: center;
    display: block;
    margin: auto;
  }
  .head{
    margin-top: 6px;
    width: 50px;
    height: auto;
    margin-right: 50px;
    float: right;
    border-radius: 50%;
  }
</style>
<template>
  <div class="layout">
    <Layout>
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}" ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
          <Header :style="{padding: 0}" class="layout-header-bar" >
            <img class="box" src="http://img1.imgtn.bdimg.com/it/u=508891803,1249450012&fm=26&gp=0.jpg">
          </Header>
          <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
            <MenuItem style="width: 100%;height:100%;text-align: center" v-for="(item, index) in routeList" :key="index" :name="index" :class="{active:index==num}">
              <div style="padding: 14px 24px;" @click="home(item.path,index)" >
                <Icon :type="item.type[index]" ></Icon>
                <span >{{item.name}}</span>
              </div>
            </MenuItem>
          </Menu>
        </Sider>

      <Layout :style="{marginLeft: '200px'}">
        <Header  :style="{padding: 0}" class="layout-header-bar" style="position: fixed;width: 87%;z-index: 1">
          <img class="head" :src="src">
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
          <router-view></router-view>
        </Content>
    </Layout>
    </Layout>
  </div>
</template>
<script>
  import FirstChild from './firstChild'
  import SecondChild from './secondChild'
  import head from '@/assets/images/1.jpg'
  export default {
    data() {
      return {
        isCollapsed: false,
        routeLists: [],
        type: [
          'ios-navigate',
          'ios-keypad',
          'ios-analytics',
          'ios-paper'
        ],
        num:'',
        src:head
      }
    },
    components: {
      FirstChild,
      SecondChild,
    },
    created() {
      this.num=this.$route.query.index||0;
      this.$router.options.routes.some(item => {
        if (item.path === '/home') {
          this.getRouter(item.children);
          return true;
        }
      });
    },
    computed: {
      rotateIcon() {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];

      },
      menuitemClasses() {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods: {
      collapsedSider() {
        this.$refs.side1.toggleCollapse();
        console.log(this.$refs.side1)
      },
      getRouter(arr) {
        let role = sessionStorage.getItem('roles') || this.$store.getters.getRoles;
        this.routeList = [];
        arr.map(item=> {
          if (item.meta.indexOf(role) > -1) {
            this.routeList.push({
              path: '/home/' + item.path,
              name: item.name,
              type: this.type
            });
          }
        });
      },
      home(url,index) {
        this.$router.push({path: url+'?index='+index});
        this.num=index;
      }
    }
  }
</script>
