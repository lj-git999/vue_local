<template>
    <div>
        <h3>{{index}}</h3>
       <table border="1">
           <tr>
               <td>id</td>
               <td>地址</td>
               <td>爱好</td>
               <td>生日</td>
               <td>工资</td>
           </tr>
           <tr >
               <td v-for="(user,index) in user_list[index]" :key="index">{{ user }}</td>
<!--               <td>{{user.addr}}</td>-->
<!--               <td>{{user.hobby}}</td>-->
<!--               <td>{{user.bir}}</td>-->
<!--               <td>{{user.salary}}</td>-->
           </tr>
       </table>
    </div>

</template>

<script>
export default {
    name: "Msg",
    data(){
        return{
            user_list:[
                {id:1,addr:"北京",hobby:"足球",bir:"2012-1-1",salary:5000},
                {id:2,addr:"河北",hobby:"蓝球",bir:"2012-5-1",salary:11000},
                {id:3,addr:"天津",hobby:"羽毛球",bir:"2012-6-1",salary:7000},
                {id:4,addr:"上海",hobby:"排球",bir:"2012-7-1",salary:9000},

            ],
            index:this.$route.params.id,
        }
    }
}
</script>

<style scoped>

</style>
