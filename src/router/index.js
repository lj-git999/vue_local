import Vue from 'vue'
import Router from 'vue-router'
import First from "../components/First";
import Second from "../components/Second";
import Node from "../components/Node";
import Msg from "../components/Msg";
Vue.use(Router)

export default new Router({
  routes: [
      {path:'/first',component:First},
      {path:'/second',component:Second},
      {path:'/node',component:Node},
      {path:'/msg/:id',component:Msg},
      {path:'/',component:First},
      {path:'/*',component:First},

  ]
})
