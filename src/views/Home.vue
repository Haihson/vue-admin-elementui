<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="20" class="logo">
        <img src="./../assets/images/logo.svg">
        <span>Admin Panel</span>
      </el-col>
      <el-col :span="4" class="userinfo">
        <el-dropdown trigger="hover">
          <span class="el-dropdown-link userinfo-inner"><img :src="this.userAvatar"/> {{ userName }}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>

    <el-col :span="24" class="main">
      <aside>
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose"
                 @select="handleselect" unique-opened router>
          <menu-tree :nodes="$router.options.routes"></menu-tree>
        </el-menu>
      </aside>
      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="breadcrumb-container">
            <strong class="title">{{$route.name}}</strong>
            <el-breadcrumb separator="/" class="breadcrumb-inner">
              <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="item.name">
                {{ item.name }}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="24" class="content-wrapper">
            <transition>
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>

<script>
  import MenuTree from '@/components/MenuTree'

  export default {
    data () {
      return {
        nodes: this.$router.options.routes,
        userName: '',
        userAvatar: ''
      }
    },
    created () {
      let isLoadNodes = window.sessionStorage.getItem('isLoadNodes')
      if (!isLoadNodes) {
        let data = JSON.parse(window.sessionStorage.getItem('menuData'))
        this.nodes.push(...data)
        window.sessionStorage.setItem('isLoadNodes', 'true')
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      },
      handleopen () {
        console.log('handleopen')
      },
      handleclose () {
        console.log('handleclose')
      },
      handleselect: function (a, b) {
      },
      logout: function () {
        var _this = this
        _this.$confirm('确认退出吗?', '提示', {}).then(() => {
          window.sessionStorage.removeItem('user')
          window.sessionStorage.removeItem('menuData')
          window.sessionStorage.removeItem('isLoadNodes')
          window.location.href = '/'
        }).catch(() => {

        })
      }
    },
    mounted () {
      let user = window.sessionStorage.getItem('user')
      if (user) {
        user = JSON.parse(user)
        this.userName = user.name || ''
        this.userAvatar = user.avatar || ''
      }
    },
    components: {
      MenuTree
    }
  }
</script>

<style scoped lang="scss">
  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    .header {
      height: 60px;
      line-height: 60px;
      background: #1F2D3D;
      color: #c0ccda;
      .userinfo {
        text-align: right;
        padding-right: 35px;
        .userinfo-inner {
          color: #c0ccda;
          cursor: pointer;
          img {
            width: 40px;
            height: 40px;
            border-radius: 20px;
            margin: 10px 0px 10px 10px;
            float: right;
          }
        }
      }
      .logo {
        font-size: 22px;
        img {
          float: left;
          margin: 10px 10px 10px 18px;
        }
        .txt {
          color: #20a0ff
        }
      }
    }
    .main {
      background: #324057;
      position: absolute;
      top: 60px;
      bottom: 0px;
      overflow: hidden;
      aside {
        width: 230px;
      }
      .content-container {
        background: #f1f2f7;
        position: absolute;
        right: 0px;
        top: 0px;
        bottom: 0px;
        left: 230px;
        overflow-y: scroll;
        padding: 20px;
        .breadcrumb-container {
          margin-bottom: 15px;
          .title {
            width: 200px;
            float: left;
            color: #475669;
          }
          .breadcrumb-inner {
            float: right;
          }
        }
        .content-wrapper {
          background-color: #fff;
          box-sizing: border-box;
        }
      }
    }
  }
</style>
