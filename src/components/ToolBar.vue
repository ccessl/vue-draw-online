<template>
    <div class="draw-tool" v-drag>
        <div class="drag-tool"></div>
        <div class="shape-picker">
           <span class="shape-picker-item" v-for="(item,index) in toolList" :key="index" :title="item.title" :class="{active:item.state===drawState}" @click="setDrawState(item.state)">
             <i class="fa" :class="item.icon"></i>
           </span>
        </div>
        <div class="shape-fill">
            <div class="shape-fill-icon" :class="{active:drawState==='fill'}" @click="setDrawState('fill')">
                <i class="fa fa-clipboard"></i>
            </div>
            <p>填充</p>
        </div>
        <div class="now-color">
            <div class="now-color-show" :style="{backgroundColor:color}"></div>
            <p>颜色</p>
        </div>
        <div class="color-picker">
            <span class="color-picker-item"  v-for='(item,index) in colorList' :key="index" :style="{backgroundColor:item.color}" @click="setColor(item.color)"></span>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'
    import drag from '../directives/drag'
    export default {
        name: 'ToolBar',
        data () {
            return {
                activeTool: '',
                toolList: [
                    { icon: 'fa fa-pencil', state: 'polyline', title: '画笔工具' },
                    { icon: 'fa-circle-o', state: 'ellipse', title: '椭圆工具' },
                    { icon: 'fa-square-o', state: 'rect', title: '矩形工具' },
                    { icon: 'fa-minus', state: 'line', title: '直线工具' },
                    { icon: 'fa-font', state: 'text', title: '文字工具' }],
                colorList:[
                    { color:'#000000'},
                    { color:'#FF88C2'},
                    { color:'#FF5511'},
                    { color:'#EE7700'},
                    { color:'#FFFF00'},
                    { color:'#BBFF00'},
                    { color:'#77FF00'},
                    { color:'#00FF00'},
                    { color:'#00FFFF'},
                    { color:'#00BBFF'},
                    { color:'#0000FF'},
                    { color:'#7700FF'},
                    { color:'#9900FF'},
                    { color:'#CC00FF'},
                    { color:'#FF00FF'},
                    { color:'#FFFFFF'}
                ]
            }
        },
        computed:{
          ...mapState(['color','drawState'])
        },
        directives:{
            drag
        },
        methods:{
            ...mapMutations({
                setDrawState:'setDrawState',
                setColor:'setColor'
            })
        }
    }
</script>

<style lang="scss" scoped>
    .draw-tool{
        position: fixed;
        font-size:12px;
        top:60px;
        left:10px;
        height: 80px;
        background-color: white;
        color: rgb(117, 117, 117);
        box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
        padding-right:10px;
        z-index: 1000;
        display: flex;
        .drag-tool{
            width:20px;
            height: 100%;
            cursor: move;
            background-color:  #ccc;
        }
        .shape-picker{
            display: flex;
            align-items: center;
            .shape-picker-item{
                width: 30px;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                &:hover,&.active{
                    background-color: #EDF1EA;
                    color:#4caf50;
                }

            }
        }
        .shape-fill{
            margin:10px 0;
            border-left: 1px solid #ccc;
            border-right: 1px solid #ccc;
            width:44px;
            text-align: center;
            .shape-fill-icon{
                margin-top: 8px;
                height:30px;
                display: flex;
                justify-content: center;
                align-items: center;
                &.active{
                    background-color: #EDF1EA;
                    color:#4caf50;
                }
            }
        }
        .now-color{
            margin:10px 5px;
            width:40px;
            text-align: center;
            .now-color-show{
                border:2px solid #dce3e9;
                border-radius: 2px;
                width: 30px;
                height: 16px;
                margin:14px 5px 10px 5px;
            }
        }
        .color-picker{
            display: flex;
            align-content: center;
            flex-wrap:wrap;
            width:150px;
            .color-picker-item{
                border-radius: 2px;
                width:16px;
                height:16px;
                margin:2px;
                border:2px solid #dce3e9;

            }
        }
    }
</style>
