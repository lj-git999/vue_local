<template>
    <div>
        <input type="text" v-model="msg">
        <input type="button" value="发布留言" @click="add_note">
        <ul>
            <li v-for="(value,index) in note_list" :key="index"><span>{{value}}</span> <a href="#" @click="del_note(index)">删除</a></li>
        </ul>
        <span>总数量:{{note_list.length}}条</span> <button @click="del_all">全部删除</button>
    </div>

</template>

<script>
export default {
    name: "Node",
    data(){
        return{
            msg:'',
            note_list:localStorage.note_list? JSON.parse(localStorage.note_list):[]

        }

    },
    methods:{
        add_note(){
            console.log(this.msg)
            let msg=this.msg;
            if (msg){
                this.note_list.unshift(this.msg);
                localStorage.note_list=JSON.stringify(this.note_list);
            }
            this.msg='';

        },
        del_note(index){
            console.log(index)
            this.note_list=JSON.parse(localStorage.note_list)
            console.log(JSON.parse(localStorage.note_list))
            this.note_list.splice(index,1);
            console.log(JSON.stringify(this.note_list))
            localStorage.note_list=JSON.stringify(this.note_list);



        },
        del_all(){
            this.note_list=[];
            localStorage.clear()
        }
    }
}
</script>

<style scoped>

</style>
