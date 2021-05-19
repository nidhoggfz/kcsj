<template>
  <el-container>
    <el-header class="home-header">
      <div class="title">课程管理系统</div>
      <div class="user-info">
        <el-dropdown>
          <el-button type="info" icon="el-icon-user">
            user<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-tabs style="margin-left: 60px;width: 1300px">
      <el-tab-pane label="我的课程" >
        <el-collapse accordion style="margin-left:50px;margin-top: 60px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);width: 1200px">
          <el-collapse-item title="大一上学期" name="first" style="margin-left: 20px">
            <el-card shadow="always">
              <el-main>
                <el-container>
                  <el-header>
                    <el-row>
                      <router-link to="/yishang">
                        <el-button  type="primary" icon="el-icon-s-opportunity">我选的</el-button>
                      </router-link>
                    </el-row>
                  </el-header>
                  <div><router-view></router-view></div>
                </el-container>
              </el-main>
            </el-card>
          </el-collapse-item>
          <el-collapse-item title="大一下学期" name="second" style="margin-left: 20px">
            <el-card shadow="always">
              <el-main>
                <el-container>
                  <el-header>
                    <el-row>
                      <router-link to="/student">
                        <el-button  type="primary" icon="el-icon-s-opportunity">我选的</el-button>
                      </router-link>
                    </el-row>
                  </el-header>
                  <div><router-view></router-view></div>
                </el-container>
              </el-main>
            </el-card>
          </el-collapse-item>
          <el-collapse-item title="大二上学期" name="third" style="margin-left: 20px">
            <el-card shadow="always">
              <el-main>
                <el-container>
                  <el-header>
                    <el-row>
                      <router-link to="/teacher">
                        <el-button  type="primary" icon="el-icon-s-opportunity">我选的</el-button>
                      </router-link>
                    </el-row>
                  </el-header>
                  <div><router-view></router-view></div>
                </el-container>
              </el-main>
            </el-card>
          </el-collapse-item>
          <el-collapse-item title="大二下学期" name="forth" style="margin-left: 20px">
            <el-card shadow="always">
              <el-main>
                <el-container>
                  <el-header>
                    <el-row>
                      <router-link to="/teacher">
                        <el-button  type="primary" icon="el-icon-s-opportunity">我选的</el-button>
                      </router-link>
                    </el-row>
                  </el-header>
                  <div><router-view></router-view></div>
                </el-container>
              </el-main>
            </el-card>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
    </el-tabs>
    <el-footer style="margin-top: 60px">
      <el-steps :active="2" align-center>
        <el-step title="步骤1" description="注册课堂派并登录"></el-step>
        <el-step title="步骤2" description="选择课程"></el-step>
        <el-step title="步骤3" description="学习"></el-step>
      </el-steps>
      <el-popover style="margin-left: 500px"
                  placement="top-start"
                  title="姓名"
                  width="200"
                  trigger="hover"
                  content="陶智剑、张坤、邱煜辉">
        <el-button slot="reference">项目负责人</el-button>
      </el-popover>
      <el-popover style="margin-left: 50px;margin-top: 50px"
                  placement="top-start"
                  title="邮箱"
                  width="200"
                  trigger="hover"
                  content="xxxxx@qq.com">
        <el-button slot="reference">联系方式</el-button>
      </el-popover>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  name: 'About',
  data () {
    return {
      user: JSON.parse(window.sessionStorage.getItem("user"))
    }
  },
  computed: {
    routes () {
      return this.$store.state.routes;
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>
<style scoped>
.home-header {
  background-color: cornflowerblue;
  line-height: 60px;
  display: flex;
}
.home-header .title {
  font-size: 30px;
  font-family: 华文楷书;
  color: #505458;
  margin:0 auto;
}
.user-info {
  cursor: pointer;
}
</style>