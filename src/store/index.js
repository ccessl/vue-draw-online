import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    color:'#000000',
    trigger:0,
    drawState:'',
    zrGroup:{},
    zr:null
  },
  mutations:{
    setColor(state,value){
      state.color=value
    },
    setDrawState(state,value){
      state.drawState=value
      state.trigger++
    },
    setZrGroup(state,value){
      state.zrGroup=value
    },
    setZr(state,value){
      state.zr=value
    }

  }
})
