<template>
  <div class="container">
    <tool-header></tool-header>
    <tool-bar></tool-bar>
    <div class="main">
      <draw-container class="draw"></draw-container>
      <element-list ></element-list>
    </div>
  </div>
</template>
<script>
  import ToolHeader from './components/ToolHeader'
  import ToolBar from './components/ToolBar'
  import DrawContainer from './components/DrawContainer'
  import ElementList from './components/ElementList'

  export default {
    name: 'ZrenderDraw',
    components: {
      ToolHeader,
      ToolBar,
      DrawContainer,
      ElementList
    },
    data () {
      return{

      }
    },
    methods:{

    }
  }
</script>
<style lang="scss" scoped>
  .container{
    height:100%;
    position:relative;
    display: flex;
    flex-direction: column;
    .main{
      flex:1;
      display: flex;
      overflow: hidden;
      .draw{
        flex:1;
      }
    }
  }
</style>
