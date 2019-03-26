<template>
  <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="logon">
    <FormItem prop="userName">
      <Input v-model="form.username" placeholder="请输入用户名">
        <span slot="prepend">
          <Icon :size="16" type="ios-person"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="form.password" placeholder="请输入密码" @keyup.enter.native="login">
        <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem>
      <Button @click="login" type="primary" long>登录</Button>
    </FormItem>
  </Form>
</template>
<script>
  export default {
    name: 'LoginForm',
    props: {
      userNameRules: {
        type: Array,
        default: () => {
          return [
            { required: true, message: '账号不能为空', trigger: 'blur' }
          ]
        }
      },
      passwordRules: {
        type: Array,
        default: () => {
          return [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    data () {
      return {
        form: {
          username: '',
          password: '',
        }
      }
    },
    computed: {
      rules () {
        return {
          username: this.userNameRules,
          password: this.passwordRules
        }
      }
    },
    methods: {
      login(){
        this.$refs.loginForm.validate((valid) => {
          console.log(valid)
          if (valid) {
            this.$emit('on-login', {
              username: this.form.username,
              password: this.form.password
            })
          }
        })
      }
    }
  }
</script>
