<template>
  <div class="containers">
    <el-container style="height:100%">
      <el-aside :width="isOpen?'200px':'64px'">
        <div class="logo" :class="{smallLogo:!isOpen}"></div>
        <el-menu
          default-active="/"
          background-color="#002033"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="!isOpen"
          :collapse-transition="false"
          style="border-right:none"
          router
        >
          <el-menu-item index="/">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/article">
            <i class="el-icon-document"></i>
            <span slot="title">内容管理</span>
          </el-menu-item>
          <el-menu-item index="/image">
            <i class="el-icon-picture"></i>
            <span slot="title">素材管理</span>
          </el-menu-item>
          <el-menu-item index="/publish">
            <i class="el-icon-s-promotion"></i>
            <span slot="title">发布文章</span>
          </el-menu-item>
          <el-menu-item index="/comment">
            <i class="el-icon-chat-dot-round"></i>
            <span slot="title">评论管理</span>
          </el-menu-item>
          <el-menu-item index="/fans">
            <i class="el-icon-present"></i>
            <span slot="title">粉丝管理</span>
          </el-menu-item>
          <el-menu-item index="/setting">
            <i class="el-icon-setting"></i>
            <span slot="title">个人设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <i class="el-icon-s-fold" @click="toggleMenu" style="font-size:40px;margin-right:20px"></i>
          <span style="font-size:30px">江苏传智播客科技教育有限公司</span>
          <el-dropdown class="dropdown">
            <span class="el-dropdown-link">
              <img class="headIcon" src="../../assets/avatar.jpg" alt />
              <span class="userName">用户名称</span>
              <!-- 用户名称 -->
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
              <el-dropdown-item icon="el-icon-unlock">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: true
    }
  },
  methods: {
    toggleMenu () {
      // 切换左菜单 展开与收起
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped lang='less'>
.containers {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  .el-aside {
    background: #002033;
    .logo {
      width: 100%;
      height: 60px;
      background: #002244 url(../../assets/logo_admin.png) no-repeat center /
        140px auto;
    }
    .smallLogo {
      background-image: url(../../assets/logo_admin_01.png);
      background-size: 36px auto;
    }
  }
  .el-header {
    line-height: 60px;
    border-bottom: 1px solid #ddd;
    i {
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
    }
  }
  .dropdown {
    float: right;
    .headIcon {
      width: 30px;
      height: 30px;
      border-radius: 15px;
      vertical-align: middle;
    }
    .userName {
      font-weight: bold; //加粗
      vertical-align: middle;
      margin-left: 5px;
    }
  }
}
</style>
