<template>
    <div class="list-container">
        <div class="list-item" v-for="item in list" :class="{active:item.id==activeId}"  :key="item.id" @click="setSelect(item.ref)">
            <i class="fa fa-remove" @click="remove(item.ref)"></i>
            {{`${item.type} ${item.id}`}}
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'ElementList',
        data () {
            return{
                list:[],
                activeId:''
            }
        },
        computed:{
          ...mapState(['zrGroup','zr']),
        },
        watch:{
            'zrGroup._children'(){
                let temp=[]
                this.zrGroup.eachChild(el=>{
                    temp.push({
                        id:el.id,
                        type:el.type,
                        ref:el
                    })
                })
                this.list=temp
            }
        },
        methods:{
            setSelect(el){
                this.activeId=el.id
                this.zr.clearHover()
                this.zr.addHover(el,{
                    fill:'gold',
                    stroke:'gold',
                    shadowColor:'#ee604a'
                })
            },
            remove(el){
                this.zrGroup.remove(el)
            }
        },
        mounted() {

        }
    }
</script>

<style lang="scss" scoped>
    .list-container{
        box-sizing: border-box;
        width:180px;
        font-size: 14px;
        background-color: #f6f6f6;
        border-left: 1px solid #f0f2f7;
        border-bottom:2px solid #f0f2f7;
        height: 100%;
        overflow-y: scroll;
        .list-item{
            padding: 10px 0 10px 20px;
            background-color: white;
            position: relative;
            >i{
                margin-right:10px;
                &:hover{
                    color:red;
                }
            }
            &.active,&:hover{
                background-color: #b6bcbc;
            }
            &.active:after{
                content: '';
                height: 36px;
                position: absolute;
                right: 0;
                top: 0;
                border-right: 6px solid #296baf;
            }
        }
    }
</style>
