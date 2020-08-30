<template>
<div id="ccc" v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">


    <div class="sho" >
        <div>
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="用户名">
                    <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="formLabelAlign.pwd" show-password></el-input>
                </el-form-item>
                </el-form>
                 
        </div>
       <p>
           <el-button type="primary" @click="log">登录</el-button>
       </p>
    </div></div>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
       loading:false,
        formLabelAlign: {
          name: '',
         pwd:''
        }
      };
    },
    methods:{
        log(){
            // this.$message.customClass('lll')
            if( this.formLabelAlign.name===''){
                 this.$message.error('请输入用户名');
                    
            }
            else if(this.formLabelAlign.pwd===''){
                        this.$message.error('请输入密码');
                        
             }
            else{
                localStorage.setItem('token',123)
                this.loading=true
                this.$store.dispatch('login/deng',this.formLabelAlign).then((data)=>{
                   this.loading=false
                      this.$router.push({
                            name:'Home'
                     })
                      this.$message({
                        message: '登陆成功',
                        type: 'success'
                        });
                })
               
                      
            }
        }
    }
  }
</script>

<style lang="scss" scoped>
#ccc{
    height: 100vh;
}
.sho{
    padding-top:40% ;
    div{
        
        width: 20rem;
        .el-from{
            width: 10rem;
           
        }
        
    }
    p{
        display: flex;
        justify-content: center;
        .el-buttom{
             
        }
       
    }
    
}
// @media screen and (max-width: 500rem) {
//     .sho {
//         width: 700rem;
//     }
// }
</style>