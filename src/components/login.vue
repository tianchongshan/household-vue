<template>
  <div class="backlogin">

    <div class="login_box">
      <Form ref="formLogin" :model="formLogin" :rules="ruleLogin">
      <div class="title">后台登录</div>
      <div>

        <FormItem prop="username">
           <input v-model="formLogin.username" class="myinput" type="text" placeholder="请输入用户名" v-model="username" />
        </FormItem>
        <FormItem prop="password">
           <input v-model="formLogin.password" @keyup.13="login" class="myinput" type="password" placeholder="请输入密码" v-model="password" />
        </FormItem>
      </div>
      <div class="login_other">
        <a href="javascript:;">注册</a>
        <input type="checkbox" id="remenberme" />
        <label for="remenberme">记住我</label>
      </div>
        <FormItem>
            <button :disabled="disablebtn" class="login" @click="login('formLogin')" >{{loginText}}</button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
    import {
        Toast
    } from 'mint-ui';
    export default {
        name: 'backlogin',
        data() {
            return {
                formLogin: {
                    username: "admin",
                    password: "123456",
                    disablebtn: false,
                    loginText: "登录"
                },
                ruleLogin:{
                    username:[

                    ],
                    password:[

                    ]
                }
            }
        },
        methods: {
            login(formLogin) {
                var vm = this;
                this.disablebtn = true;
                this.loginText = "登陆中";
                this.$reqs.post('/users/login', {
                    username: this.username,
                    password: this.password
                }).then(function (res) {
                    if (res.data.status === true) {
                        vm.$router.replace('/home');
                    } else {
                        //弹窗
                        Toast({
                            message: res.data.errMsg,
                        });
                        vm.disablebtn = false;
                        vm.loginText = "登陆";
                    }
                }).catch(function (err) {
                    vm.disablebtn = false;
                    vm.loginText = "登陆";
                })
            }
        }
    }
</script>
<style scope>
 /* 剩下的样式自由发挥*/
</style>
