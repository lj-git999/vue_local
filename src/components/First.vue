<template>
  <div>
    <h3>这是用户管理</h3>
    <table border="1">
      <tr>
        <td>id</td>
        <td>姓名</td>
        <td>年龄</td>
        <td>个人信息</td>
        <td>操作</td>
      </tr>
      <tr v-for="(user,index) in user_list" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.age}}</td>
        <td>{{user.msg}}</td>
        <td><a href="javascript:;" @click="show(index)">查看用户详情</a>|<a href="javascript:;" @click="del_msg(index)">删除</a></td>
      </tr>
    </table>
  </div>

</template>

<script>
export default {
  name: "First",
  data(){
    return{
      user_list:[
        {id:1,name:"小黑",age:23,msg:"我是python大神"},
        {id:2,name:"小红",age:33,msg:"我是python大神"},
        {id:3,name:"小白",age:43,msg:"我是python大神"},
        {id:4,name:"小绿",age:53,msg:"我是python大神"},
      ]
    }
  },
  methods:{
    show(index){
      this.$router.push({path:'/msg/'+index})
    },
    del_msg(index){
      this.user_list.splice(index,1);
    }

  }
}
</script>

<style scoped>
h3{
  color:red;
}
</style>
