<template>
    <div class="header-container">
      <div class="tool-item" v-for="(item,index) in toolList" :key="index" @click="setDrawState(item.drawState)">{{item.text}}</div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        name: 'ToolHeader',
        data () {
            return {
                toolList: [{ text:'新建' ,drawState:'newFile'},
                    { text:'撤销图形' ,drawState:'undo'},
                    { text:'保存' ,drawState:'save'},],
            }
        },
        methods:{
            ...mapMutations({
                setDrawState:'setDrawState'
            })
        }
    }
</script>

<style lang="scss" scoped>
    .header-container{
        display: flex;
        align-items: center;
        height:50px;
        font-size: 14px;
        background-color: black;
        .tool-item{
            cursor:pointer;
            color: #cccccc;
            margin-left:10px;
            height:50px;
            padding: 0 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover{
                color: #fff;
            }
        }
    }
</style>
