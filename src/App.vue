<template>
  <div class="container">
    <tool-bar @click="toolClick"></tool-bar>
    <draw-container :toolState="toolState" :trigger="trigger"></draw-container>
  </div>
</template>
<script>
  import ToolBar from './components/ToolBar'
  import DrawContainer from './components/drawContainer'

  export default {
    name: 'ZrenderDraw',
    components: {
      ToolBar,
      DrawContainer
    },
    data () {
      return{
        toolState:'',
        trigger:0

      }
    },
    methods:{
      toolClick(state){
        this.toolState=state
        this.trigger++
      }
    }
  }
</script>
<style lang="scss" scoped>
  .container{
    height:100%;
    position:relative;
    background-color: #99a9bf;
  }
</style>
