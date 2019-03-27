<style lang="less">
  @import './login.css';
</style>
<template>
    <div class="login">
      <div class="login-con">
        <Card icon="log-in" title="欢迎登录" :bordered="false">
          <div class="form-con">
            <login-form @on-login="login"></login-form>
            <p class="login-tip">请输入用户名和密码</p>
          </div>
        </Card>
      </div>
    </div>

</template>
<script>
  import LoginForm from '@/components/login/login'
export default {
  name: 'login',
  data(){
    return {
      spinShow:false
    }
  },
  components: {
    LoginForm
  },
  methods:{
    login ({ username, password }) {
      //此处登录验证，验证成功后返回用户角色和 ‘签名的token’，因为没写后台，所以直接用一个判断代替
      //下面代码模拟登录
      if(password!='123456'){
        this.$Message.success('密码输入错误');
      }
      if (username === 'admin' && password === '123456') {
        this.$store.commit('addRoles', {
          roles: 'admin'
        });
        sessionStorage.setItem('roles', 'admin');
        this.$Message.success('登录成功');
        this.$router.push('/home');
      } else if (username === 'user' && password === '123456') {
        this.$store.commit('addRoles', {
          roles: 'user'
        });
        sessionStorage.setItem('roles', 'user');
          this.$Message.success('登录成功');
          this.$router.push('/home');
      }
      // this.handleLogin({ userName, password }).then(res => {
      //   this.getUserInfo().then(res => {
      //     this.$router.push({
      //       name: this.$config.homeName
      //     })
      //   })
      // })
    }
  },
  computed:{
  }
}
</script>
