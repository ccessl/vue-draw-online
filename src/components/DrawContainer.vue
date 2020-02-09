<template>
    <div class="draw-container">
        <div class="draw-main" ref="drawMain"></div>
        <textarea id="textInput" cols="30" rows="5"></textarea>
    </div>
</template>
<script>
    import zrender from 'zrender/dist/zrender'
    import {getNowFormatDate} from "../utils";
    import {mapState,mapMutations} from 'vuex'

    export default {
        name: 'DrawContainer',
        data () {
            return {
                zr: '',
                zrGroup: '',
                zrBgElement:null,
                commonStyle: {
                    fill: 'transparent',
                    stroke: 'black'
                },
                fontStyle:{
                    fontSize:"15",
                    textStroke:"black",
                }
            }
        },
        computed:{
          ...mapState(['color','trigger','drawState'])
        },
        watch:{
            trigger(){
              this.zr.off('mousedown')
              this.zr.off('mousemove')
              this.zr.off('mouseup')
              this.zr.off('click')
              switch (this.drawState) {
                  //菜单
                  case 'newFile':
                      this.newFile()
                      break;
                  case 'undo':
                      this.undo()
                      break
                  case 'save':
                      this.save()
                      break
                  //图形
                  case'polyline':
                      this.drawPolyline()
                      break
                  case 'ellipse':
                      this.drawEllipse()
                      break
                  case 'rect':
                      this.drawRect()
                      break
                  case 'line':
                      this.drawLine()
                      break
                  case 'text':
                      this.drawText()
                      break
                  //填充
                  case 'fill':
                      this.fill()
                      break
              }
          }
        },
        methods: {
            ...mapMutations({
                setDrawState:'setDrawState',
                setZrGroup:'setZrGroup',
                setZr:'setZr'
            }),
            drawPolyline(){
                const _this = this
                let element, posX, posY
                let points=[]
                let mouseDown = false
                let zrGroup = this.zrGroup
                this.zr.on('mousedown', (event) => {
                    posX = event.offsetX - zrGroup.position[0]
                    posY = event.offsetY - zrGroup.position[1]
                    mouseDown = true
                    points.length=0
                    points.push([posX,posY])
                    element = new zrender.Polyline({
                        type:'circle',
                        shape: {
                            points
                        },
                        style: {..._this.commonStyle,stroke:_this.color,smooth:0.5}
                    })
                    zrGroup.add(element)
                })
                this.zr.on('mousemove', (event) => {
                    if (mouseDown) {
                        let Y = event.offsetY - zrGroup.position[1]
                        let X = event.offsetX - zrGroup.position[0]
                        points.push([X,Y])
                        element.attr({
                            shape: {
                                points
                            }
                        })
                    }
                })
                this.zr.on('mouseup', () => { mouseDown = false })
            },
            drawEllipse () {
                const _this = this
                let element, posX, posY
                let mouseDown = false
                let zrGroup = this.zrGroup
                this.zr.on('mousedown', (event) => {
                    posX = event.offsetX - zrGroup.position[0]
                    posY = event.offsetY - zrGroup.position[1]
                    mouseDown = true
                    element = new zrender.Ellipse({
                        type:'circle',
                        shape: {
                            cx: posX,
                            cy: posY,
                            rx: 0,
                            ry: 0
                        },
                        style: {..._this.commonStyle,stroke:_this.color}
                    })
                    zrGroup.add(element)
                })
                this.zr.on('mousemove', (event) => {
                    if (mouseDown) {
                        let Y = event.offsetY - zrGroup.position[1]
                        let X = event.offsetX - zrGroup.position[0]
                        element.attr({
                            shape: {
                                cx: (X + posX) / 2,
                                cy: (Y + posY) / 2,
                                rx: (X - posX) / 2,
                                ry: (Y - posY) / 2
                            }
                        })
                    }
                })
                this.zr.on('mouseup', () => { mouseDown = false })
            },
            drawRect () {
                const _this = this
                let element, posX, posY
                let mouseDown = false
                let zrGroup = this.zrGroup
                this.zr.on('mousedown', (event) => {
                    posX = event.offsetX - zrGroup.position[0]
                    posY = event.offsetY - zrGroup.position[1]
                    mouseDown = true
                    element = new zrender.Rect({
                        type:'rect',
                        shape: {
                            x: posX,
                            y: posY,
                            width: 0,
                            height: 0
                        },
                        style: {..._this.commonStyle,stroke:_this.color}
                    })
                    zrGroup.add(element)
                })
                this.zr.on('mousemove', (event) => {
                    if (mouseDown) {
                        let Y = event.offsetY - zrGroup.position[1]
                        let X = event.offsetX - zrGroup.position[0]
                        element.attr({
                            shape: {
                                x: (X - posX < 0) ? X : posX,
                                y: (Y - posY < 0) ? Y : posY,
                                width: Math.abs(X - posX),
                                height: Math.abs(Y - posY)
                            }
                        })
                    }
                })
                this.zr.on('mouseup', () => { mouseDown = false })
            },
            drawLine () {
                const _this = this
                let element, posX, posY
                let mouseDown = false
                let zrGroup = this.zrGroup
                this.zr.on('mousedown', (event) => {
                    posX = event.offsetX - zrGroup.position[0]
                    posY = event.offsetY - zrGroup.position[1]
                    mouseDown = true
                    element = new zrender.Line({
                        type:'line',
                        shape: {
                            x1: posX,
                            y1: posY,
                            x2: posX,
                            y2: posY
                        },
                        style: {..._this.commonStyle,stroke:_this.color}
                    })
                    zrGroup.add(element)
                })
                this.zr.on('mousemove', (event) => {
                    if (mouseDown) {
                        let Y = event.offsetY - zrGroup.position[1]
                        let X = event.offsetX - zrGroup.position[0]
                        element.attr({
                            shape: {
                                x1: posX,
                                y1: posY,
                                x2: X,
                                y2: Y
                            }
                        })
                    }
                })
                this.zr.on('mouseup', () => { mouseDown = false })
            },
            drawText () {
                const _this = this
                let element, posX, posY
                let zrGroup = this.zrGroup
                let textInput=document.getElementById('textInput')
                let isShow=false
                this.zr.on('mousedown', (event) => {
                    posX=textInput.offsetLeft;
                    posY=textInput.offsetTop;

                    if(isShow)
                    {
                        if(!(event.offsetY>=posY && event.offsetY<posY+239 && event.offsetX>=posX && event.offsetX<posX+117)){
                            element = new zrender.Text({
                                type:'text',
                                position:[posX,posY],
                                style: {..._this.fontStyle,text:textInput.value,textFill:this.color}
                            });
                            //更新矩形
                            zrGroup.add(element)
                            textInput.style.cssText += `display:none`
                            this.zr.off('mousedown')
                        }
                        _this.setDrawState('')
                    }else{
                        textInput.style.cssText += `;left:${event.offsetX}px;top:${event.offsetY}px;display:block`
                        isShow=true
                    }
                })
            },
            fill(){
                let _this=this
                let  posX, posY
                let zrGroup = this.zrGroup
                let isFillOutside=true
                this.zr.on('click', (event) => {
                    posX = event.offsetX - zrGroup.position[0]
                    posY = event.offsetY - zrGroup.position[1]
                    for(let index=_this.zrGroup.childCount()-1;index>=0;index--){
                        let element=_this.zrGroup.childAt(index)
                        if(element.contain(posX,posY)){
                            element.attr({
                                style: {
                                    fill:_this.color
                                }
                            })
                            isFillOutside=false
                            break;
                        }
                    }
                    if(isFillOutside){
                        _this.zrBgElement.attr({
                            style: {
                                fill:_this.color
                            }
                        })
                    }
                })
            },
            newFile(){
                this.zrGroup.removeAll()
                this.zrBgElement.attr({
                    style: {
                        fill:'#FFFFFF'
                    }
                })
                this.zr.refresh()
            },
            undo () {
                this.zrGroup.remove(this.zrGroup.childAt(this.zrGroup.childCount() - 1))
            },
            save () {
                let canvas = this.zr.painter.getRenderedCanvas({})
                let eleLink = document.createElement('a')
                eleLink.download = getNowFormatDate()
                eleLink.style.display = 'none'
                eleLink.href = canvas.toDataURL('image/png')
                document.body.appendChild(eleLink)
                eleLink.click()
                document.body.removeChild(eleLink)
            }

        },
        mounted () {
            this.zr = zrender.init(this.$refs.drawMain)
            // 背景白色
            let width = this.zr.getWidth()
            let height = this.zr.getHeight()
            this.zrBgElement=new zrender.Rect({
                shape: {
                    width,
                    height
                },
                style: {
                    fill: '#fff'
                }
            })
            this.zr.add(this.zrBgElement)

            // Group容器
            let zrGroup = new zrender.Group()
            zrGroup.position = [0, 0]
            this.zrGroup = zrGroup
            this.zr.add(this.zrGroup)

            this.setZrGroup(this.zrGroup)
            this.setZr(this.zr)
        }
    }
</script>
<style lang="scss" scoped>
        .draw-container{
            position:relative;
        }
        .draw-main{
            height:100%;
        }
        #textInput{
            position: absolute;
            top:0;
            left:0;
            border-style: solid;
            white-space: nowrap;
            z-index: 998;
            transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1), top 0.4s cubic-bezier(0.23, 1, 0.32, 1);
            background-color:transparent;
            border-width: 1px;
            border-color: black;
            border-radius: 4px;
            color: black;
            font: 14px/21px "Microsoft YaHei";
            padding: 5px;
            display: none;
        }
</style>
