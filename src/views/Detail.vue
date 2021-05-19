<template>
  <div>
    <el-container style="height: 100px;border: 1px solid #eee">
      <el-container class="导航" style="height:100px;background-color: rgb(238, 241, 246);border: 2px solid #eee">
        <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
          <i class="el-icon-s-order"></i>
        </el-button>
        <el-drawer
            title="我是标题"
            :visible.sync="drawer"
            :direction="direction"
            :before-close="handleClose"
            :with-header="false">
          <span style="margin-left: 200px;font-size: 35px">课堂派</span>
          <el-row class="tac" style="width: 2000px">
            <el-col :span="12">
              <el-menu>
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-s-management"></i>
                    <span>我的课堂</span>
                  </template>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-edit-outline"></i>
                  <span slot="title">备课区</span>
                </el-menu-item>
                <el-menu-item index="3" >
                  <i class="el-icon-document"></i>
                  <span slot="title">论文管理</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>


        </el-drawer>

        <el-breadcrumb separator-class="el-icon-arrow-right" style="text-align: right; font-size:35px;margin-top: 15px;margin-left: 20px">
          <el-breadcrumb-item style="text-align: right; font-size:20px;margin-top:25px":to="{ path: '/Home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item style="text-align: right; font-size:20px;margin-top:25px">活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button style="text-align: right; font-size:12px;margin-top:0px;margin-left: 800px"><i class="el-icon-sort">切换旧版本</i></el-button>
        <el-button style="text-align: right; font-size:20px;margin-top:0px;margin-left: 20px" ><i class="el-icon-document"></i></el-button>
        <el-dropdown style="text-align: right; font-size:35px;margin-top: 15px;margin-left: 20px">
          <el-button type="primary" >
            <i class="el-icon-message-solid"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown style="text-align: right; font-size:20px;margin-top:25px;margin-left: 20px"  >
          <i class="el-icon-setting" style="text-align: right; font-size:20px;margin-top:13px"></i>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span style="text-align: right; font-size:20px;margin-top:35px">王小虎</span>
      </el-container>
    </el-container>
    <el-container style="height:300px;margin-top: 20px;border-bottom-left-radius: 20px;border-bottom-right-radius: 20px; margin-left: 50px;margin-right: 50px;border-top-left-radius: 20px;border-top-right-radius: 20px;background-color: rgb(238, 241, 246);border: 2px solid #eee">
      <el-header style="margin-top: 20px;">
        <el-button type="text" style="margin-left: 10px;font-size: 30px;color: white">数据结构(1,2班)</el-button>
        <div style="margin-top: 25px;margin-left: 10px">
          <el-link href="https://element.eleme.io" target="_blank" icon="el-icon-s-grid">加课码</el-link>
          <el-link style="margin-left: 20px" href="https://element.eleme.io" target="_blank" icon="el-icon-s-custom">已有56人加入</el-link>
        </div>
        <el-button style="margin-left: 1200px;margin-top: 25px" type="primary">暂无课堂<i class="el-icon-video-play el-icon--right"></i></el-button>
      </el-header>
      <el-main style="margin-left: 10px;margin-top: 90px;color: brown">
        <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
          <el-menu-item style="margin-left: 480px" index="1" ><a href="https://www.ele.me" target="_blank">课程学习</a></el-menu-item>
          <el-menu-item index="2"><a href="https://www.ele.me" target="_blank">学情分析</a></el-menu-item>
          <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">成绩管理</a></el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">课程介绍</a></el-menu-item>
        </el-menu>
      </el-main>
    </el-container>
    <el-container style="margin-top: 20px; margin-left: 50px;margin-right: 50px;">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><a href="https://www.ele.me" target="_blank">章节目录</a></el-menu-item>
        <el-menu-item index="2"><a href="https://www.ele.me" target="_blank">互动课件</a></el-menu-item>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">作业</a></el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">测试</a></el-menu-item>
        <el-menu-item index="5"><a href="https://www.ele.me" target="_blank">资料</a></el-menu-item>
        <el-menu-item index="6"><a href="https://www.ele.me" target="_blank">腾讯会议</a></el-menu-item>
        <el-menu-item index="7"><a href="https://www.ele.me" target="_blank">公告</a></el-menu-item>
        <el-menu-item index="8"><a href="https://www.ele.me" target="_blank">话题</a></el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">互动答题</a></el-menu-item>
      </el-menu>
    </el-container>
  </div>

</template>
<script>
export default {
  data() {
    return {
      direction: 'ltr',
      drawer: false,
      nav: false,
    }
  },
  methods: {

    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
    },

    handleClick() {
      alert('button click');
    }
  }
}

</script>


<style>
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.导航{
  background-color: #fff;
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, .05);
  -webkit-box-shadow: #d4d2d2 0px 0px 10px;
  -moz-box-shadow: #d4d2d2 0px 0px 10px;

}
