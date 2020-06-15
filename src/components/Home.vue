
<template>
  <div>
    欢迎 登录 {{dynamicName}}
    后台获取 用户的数据  {{guding}}
    <!-- <router-view></router-view>
    <router-link to="/user/gir">女生 登录</router-link>
    <router-link to="/user/boy">男生 登录</router-link>-->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      dynamicName: "",
      guding: ""
    };
  },
  computed: {
    //   dynamicName(){
    //       return this.$route.params.userName
    //   }
  },
  mounted() {
    console.log("mouted");
    //从后台拿去 数据
    if (this.$route.params.userName === "gir") {
      this.guding = "从后台拿到的 gir 数据";
    } else if (this.$route.params.userName === "boy") {
      this.guding = "从后台拿到的 boy 数据";
    }
  },

  created() {
    console.log("create");
  },
  watch: {
    //immediate: true,
    $route(to, from) {
      console.log(to);
      console.log(from);
      this.dynamicName = to.params.userName;
      if (this.dynamicName === "gir") {
        this.guding = "从后台拿到的 gir 数据";
      } else if (this.dynamicName === "boy") {
        this.guding = "从后台拿到的 boy 数据";
      }
    }
  }
};
</script>