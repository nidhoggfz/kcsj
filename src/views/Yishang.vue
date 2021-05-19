<template >
  <div>
    <div style="margin-top:50px;">
      <el-input v-model="yishangName" placeholder="请输入课程名" style="width:80%" clearable></el-input>
      <el-button type="primary" style="margin-left: 10px;" @click="searchYishangByName">搜索</el-button>
      <el-button type="primary" style="margin-left:10px;margin-bottom: 20px;" @click="showDialog">加课</el-button>
    </div>
    <div>
      <el-table
          :data="yishangs"
          border>
        <el-table-column
            prop="uid"
            label="课程号"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="课程"
            width="180">
        </el-table-column>
        <el-table-column
            prop="teacher"
            label="任课教师"
            width="180">
        </el-table-column>
        <el-table-column
            prop="score"
            label="成绩"
            width="180">
        </el-table-column>
        <el-table-column
            label="操作">
          align="left">
          <template slot-scope="scope">
            <el-button
                size="mini" @click="toDetail()">查看详情</el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row)">退课</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :title="dialogTitle[dialogStatus]" :visible.sync="dialogFormVisible" center>
      <el-form :model="form" :rules="rules" ref="student">
        <el-form-item label="课程名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitYishangs">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      yishangName: '',
      dialogStatus: "",
      dialogTitle: {
        addYishang: "选课",
      },
      rules: {
      },
      msg: '',
      yishangs:[],
      search: '',
      dialogFormVisible: false,
      form: {
        uid:'',
        name: '',
        score: '',
        teacher: ''
      },
      formLabelWidth: '120px',
    }
  },
  created() {
    this.findAllYishangs();
  },
  watch:{
    yishangName () {
      this.findAllYishangs();
    }
  },
  methods: {
    searchYishangByName () {
      if (this.yishangName !== '') {
        this.$axios.get("/yishang/findYishangByName?name="+this.yishangName).then( (resp)=> {
          this.yishangs = resp.data;
        }).catch( (error)=>{
          this.$message({
            type: 'error',
            message: "查询失败，原因是"+error.data.message
          });
        })
      }
    },
    submitYishangs () {
        this.addStudent();
    },
    findAllYishangs () {
      this.$axios.get("/yishang/findAllYishangs")
          .then((res) => {
            this.yishangs = res.data
          })
          .catch(error => {
            this.$message({
              type: 'error',
              message: "查询失败，原因是"+error.data.message
            });
          });
    },
    handleDelete (row) {
      this.$confirm('此操作将退订该课程, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.post("/yishang/deleteYishang?uid="+row.uid).then ((resp)=>{
          this.$message.success("删除成功!")
          this.findAllYishangs();
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    showDialog () {
      this.form.uid = '';
      this.form.name = '';
      this.form.score = '';
      this.form.teacher = '';
      this.dialogFormVisible = true;
      this.dialogStatus = "addYishang";
    },
    addYishang () {
      this.$refs.yishang.validate((valid) => {
        if (valid) {
          this.$axios.post("/yishang/addYishang",this.form).then( (resp)=>{
            if (resp) {
              this.dialogFormVisible = false;
              this.$message.success("添加成功！");
              this.findAllYishangs();
            }
          }).catch((error)=>{
            this.$message({
              message: '添加数据失败，原因是'+error.data.message,
              type: 'error'
            })
          })
        } else {
          this.$message({
            message: '请输入所有字段',
            type: 'error'
          })
          return false;
        }
      });
    },
    toDetail(){
      this.$router.push('/detail')
    }
  }
}
</script>
<style scoped>
.table {
  margin: 0 auto;
  clear: both;
}
</style>
