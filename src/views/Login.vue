<template>
    <div>
      <el-form ref="form" :rules="rules" :model="form" label-width="80px;" class="login-box">
        <h3 class="login-title">欢迎登录</h3>
        <el-form-item label="账号" prop="username">
          <el-input type="text" placeholder="请输入账号" v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="form.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('form')">登入</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
          return {
            form: {
              username:'',
              password: ''
            },
            rules: {
              username: [
                { required: true, message: '请输入用户名', trigger: 'blur' }
              ],
              password: [
                { required: true, message: '请输入密码', trigger: 'blur' }
              ]
            },
          }
        },
      methods: {
        onSubmit (formName){
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$router.push({name: 'Main', params: {username: this.form.username}});
            } else {
              this.$message({
                message: '请输入账号或密码!',
                type: 'warning'
              });
              return false;
            }
          });
        }
      }
    }
</script>

<style scoped>
  .login-box {
    width: 350px;
    margin: 150px auto;
    border: 1px solid #DCDFE6;
    padding: 25px;
    border-radius: 5px;
    box-shadow: 0 0 25px #DCDFE6;
  }
  .login-title{
    text-align: center;
  }
</style>
