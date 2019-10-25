<template>
  <div class="container">
    <el-card class="box-card">
      <img
        src="../../assets/logo_index.png"
        style="width:200px; display:block; margin:0 auto 30px;"
        alt
      />

      <el-form ref="form" label-width="80px">
        <el-input v-model="loginForm.mobile" style="margin-bottom:30px" placeholder="请输入手机号"></el-input>
        <el-input
          v-model="loginForm.cade"
          style="width:230px; margin-right:15px;margin-bottom:30px"
          placeholder="请输入验证码"
        ></el-input>
        <el-button type="primary">获取验证码</el-button>
        <el-checkbox :value="true" style="margin-bottom:30px">我已阅读并同意用户协议和隐私条款</el-checkbox>

        <el-form-item style="margin:0;">
          <el-button type="primary" style="width:100%">立即登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        cade: ''
      }
    }
  }
}
</script>

<style lang = "less">
.container {
  width: 100%;
  height: 100%;
  background: url("../../assets/login_bg.jpg") no-repeat center / cover;
  position: absolute;
  top: 0;
  left: 0;
}
.el-card {
  width: 400px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
