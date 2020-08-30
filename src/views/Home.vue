<template>
  <div class="home">
    <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">普通用户</el-menu-item>
  <el-menu-item index="2">管理员</el-menu-item>
  <el-menu-item index="3">超级管理员</el-menu-item>
</el-menu>


  </div>
</template>

<script>


export default {
  name: 'Home',
  created(){
    this.open2()
  },
  methods:{
    open2() {
        this.$notify({
          title: '欢迎',
          message:'欢迎您:'+this.$store.state.login.name,
          type: 'success',
          offset: 120,
          showClose: false,
          duration:1000
       
        });
      }
  }
}
</script>
