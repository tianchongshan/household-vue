<template>
  <div class="backlogin">

    <!-- 登录表单 -->
    <el-form :model="login" status-icon :rules="rule" ref="login"   class="login-box">
      <el-row type="flex" justify="center">
        <el-col :span="5">
             <h3 class="login-title">欢迎登录</h3>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="10">
      <el-form-item label="用户名:" prop="username" >
        <el-input prefix-icon="el-icon-ump-yonghu" v-model="login.username"
                  auto-complete="off"/>
      </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="10">
      <el-form-item label="密码:" prop="password">
        <el-input prefix-icon="el-icon-ump-mima" type="password" v-model="login.password"
                  auto-complete="off"/>
      </el-form-item>
        </el-col>
      </el-row>
      <el-row class="pattern" type="flex" justify="center">
        <el-col :span="5">
      <el-form-item>
        <el-checkbox class="check" v-model="checked">记住我</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button class="btn login" type="primary" @click="submitForm('login')">登录</el-button>
      </el-form-item>
      <el-form-item>
        <el-button class="btn login" type="primary" @click="register">注册</el-button>
      </el-form-item>
        </el-col>
      </el-row>
    </el-form>

  </div>
</template>
<script>
    export default {
        name: 'login',
        data() {
            var checkUsename=(rule,value,callback) => {
                if(value === ''){
                    callback(new Error('请输入用户名'));
                }else{
                    callback();
                }
            };
            var checkPassword = (rule,value,callback) => {
                if(value === ''){
                    callback(new Error('请输入密码'));
                }else{
                    callback();
                }
            };

            return {
                labelPosition:'right',
                checked:false,
                token: '',
                login: {
                    username: '',
                    password: ''
                },
                rule: {
                    username: [
                        {validator:checkUsename, trigger: 'blur'}
                    ],
                    password: [
                        {validator:checkPassword, trigger: 'blur'},
                    ]
                }
            }
        },
        methods: {
            register() {
                this.$router.replace('/register')
            },
            submitForm(login) {
                this.$refs[login].validate((valid) => {
                    if (valid) {
                        this.$http.post('http://127.0.0.1:8085/sys/user/login', {
                            "username": this.login.username,
                            "password": this.login.password,
                        },{
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'
                        }).then(response => {
                            console.log(response.data);
                            if(response.data.code == '000000'){
                                console.log("登录成功 ");
                                this.$router.push({path:'/HelloWorld'});
                            }else{
                                console.log("登录失败 ");
                                return false;
                            }
                        });
                    }else{
                        console.log("error submit");
                        return false;
                    }
                });
            },
        }
    };
</script>
<style scope>


  .login-box {
    border: 1px solid #DCDFE6;
    width: 800px;
    margin: 100px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
  }

  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
  }

  .login{
    position : relative;
  }

</style>
