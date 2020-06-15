<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-row type="flex" justify="center">
      <el-col :span="6" class="el-col">
        <el-form :model="userform" ref="form">
          <el-form-item label="用户名:">
            <el-input class="userinput" v-model="userform.name"></el-input>
          </el-form-item>
          <el-form-item label="密码:">
            <el-input class="userinput" v-model="userform.password"></el-input>
          </el-form-item>

          <el-form-item label>
            <a href="#" @click="loingQQ">
              <img class="icon_class" src="http://cdn.askajohnny.com/qq.svg" />
            </a>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import { getRequest } from "@/api/api";

export default {
  name: "Login",
  data() {
    return {
      userform: {},
      msg: "This is Login Page"
    };
  },
  methods: {
    loingQQ() {
      console.log("QQ登录");

      var url = "/renderUrl"
      getRequest(url, null).then(res => {
          console.log(res.data);
          window.location.href = res.data;
      });
    }
  }
};
</script>

<style>
.el-col {
  border-radius: 4px;
}
.userinput {
}

.icon_class {
  width: 32px;
  height: 32px;
}
</style>