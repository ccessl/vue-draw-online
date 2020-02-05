<template>
    <div class="list-container">
        <div class="list-item" v-for="(item,index) in list" :key="index" >{{item.type}}</div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'ElementList',
        data () {
            return{
                list:[],
            }
        },
        computed:{
          ...mapState(['zrGroup']),
        },
        watch:{
            'zrGroup._children'(value){
                let type={
                    rect:0,
                    text:0,
                    circle:0,
                    line:0
                }
                if(value){
                    this.list=value.map(item=>{
                        let numIndex=type[item.type]+=1
                        return {
                            type :`${item.type} ${numIndex}`
                        }
                    })

                }

            }
        },
        methods:{

        },
        mounted() {

        }
    }
</script>

<style lang="scss" scoped>
    .list-container{
        width:180px;
        font-size: 14px;
        background-color: #f6f6f6;
        border-left: 1px solid #f0f2f7;
        border-bottom:2px solid #f0f2f7;
        .list-item{
            padding: 10px 0 10px 20px;
            background-color: white;
            &:hover{
                border:1px solid #0084ff;
            }
        }
    }
</style>
