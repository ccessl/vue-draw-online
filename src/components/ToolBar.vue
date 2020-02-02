<template>
    <div class="draw-tool" v-drag>
        <div class="drag-tool"></div>
        <span class="icon-container" v-for="(item,index) in toolList" :key="index" :title="item.title" @click="handleClick(item.action)" :class="{active:item.action===activeTool}">
        <i class="fa" :class="item.icon"></i>
      </span>
    </div>
</template>

<script>
    import drag from '../directives/drag'
    export default {
        name: 'ToolBar',
        data () {
            return {
                activeTool: '',
                toolList: [{ icon: 'fa-circle-o', action: 'circle', title: '椭圆工具' },
                    { icon: 'fa-square-o', action: 'rect', title: '矩形工具' },
                    { icon: 'fa-minus', action: 'line', title: '直线工具' },
                    { icon: 'fa-font', action: 'font', title: '文字工具' },
                    { icon: 'fa-undo', action: 'undo', title: '撤销' },
                    { icon: 'fa-download', action: 'download', title: '下载图片' }],
            }
        },
        directives:{
            drag
        },
        methods:{
            handleClick(action){
                this.activeTool = action
                this.$emit('click',action)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .draw-tool{
        position: fixed;
        top:10px;
        left:10px;
        color: rgb(117, 117, 117);
        font-size: 16px;
        height: 44px;
        line-height: 44px;
        box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
        padding-right:10px;
        display: flex;
        align-items: center;
        background-color: white;
        z-index: 1000;
        .drag-tool{
            width:20px;
            height: 100%;
            cursor: move;
            background-color:  #ccc;
        }
        .icon-container{
            border-right: 1px solid #ccc;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            &:last-child{
                border-right: none;
            }
            &:hover{
                color:#4caf50;
            }
            &.active{
                background-color: #EDF1EA;
                color:#4caf50;
            }
        }
    }
</style>
