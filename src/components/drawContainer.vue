<template>
    <div class="container">
        <div class="draw-container" ref="drawContainer"></div>
        <textarea id="textInput" cols="30" rows="5">在这里输入内容...</textarea>
    </div>
</template>
<script>
    import zrender from 'zrender/dist/zrender'
    import {getNowFormatDate} from "../utils";

    export default {
        name: 'ToolBar',
        data () {
            return {
                zr: '',
                zrGroup: '',
                commonStyle: {
                    fill: 'none',
                    stroke: 'black'
                },
                fontStyle:{
                    fontSize:"15",
                    textStroke:"black",
                },
                checkedColor: {
                    stroke: '#ed462f'
                }
            }
        },
        props:['toolState','trigger'],
        watch:{
            trigger(){
              this.zr.off('mousedown')
              this.zr.off('mousemove')
              this.zr.off('mouseup')
              switch (this.toolState) {
                  case 'circle':
                      this.drawCircle()
                      break
                  case 'rect':
                      this.drawRect()
                      break
                  case 'line':
                      this.drawLine()
                      break
                  case 'font':
                      this.drawFont()
                      break
                  case 'undo':
                      this.undo()
                      break
                  case 'download':
                      this.download()
                      break
              }
          }
        },
        methods: {
            drawCircle () {
                const _this = this
                let element, posX, posY
                let mouseDown = false
                let zrGroup = this.zrGroup
                this.zr.on('mousedown', (event) => {
                    posX = event.offsetX - zrGroup.position[0]
                    posY = event.offsetY - zrGroup.position[1]
                    mouseDown = true
                    element = new zrender.Ellipse({
                        shape: {
                            cx: posX,
                            cy: posY,
                            rx: 0,
                            ry: 0
                        },
                        style: _this.commonStyle
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
                        shape: {
                            x: posX,
                            y: posY,
                            width: 0,
                            height: 0
                        },
                        style: _this.commonStyle
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
                        shape: {
                            x1: posX,
                            y1: posY,
                            x2: posX,
                            y2: posY
                        },
                        style: _this.commonStyle
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
            drawFont () {
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
                                position:[posX,posY],
                                style: {..._this.fontStyle,text:textInput.value}
                            });
                            //更新矩形
                            zrGroup.add(element)
                            textInput.style.cssText += `display:none`
                            this.zr.off('mousedown')
                        }
                    }else{
                        textInput.style.cssText += `;left:${event.offsetX}px;top:${event.offsetY}px;display:block`
                        isShow=true
                    }
                })
            },
            undo () {
                this.zrGroup.remove(this.zrGroup.childAt(this.zrGroup.childCount() - 1))
            },
            download () {
                let canvas = this.zr.painter.getRenderedCanvas({})
                let eleLink = document.createElement('a')
                let dayStr=getNowFormatDate()
                eleLink.download = dayStr
                eleLink.style.display = 'none'
                eleLink.href = canvas.toDataURL('image/png')
                document.body.appendChild(eleLink)
                eleLink.click()
                document.body.removeChild(eleLink)
            }

        },
        mounted () {
            this.zr = zrender.init(this.$refs.drawContainer)
            // 背景白色
            let width = this.zr.getWidth()
            let height = this.zr.getHeight()
            this.zr.add(new zrender.Rect({
                shape: {
                    width,
                    height
                },
                style: {
                    fill: '#fff'
                }
            }))

            // Group容器
            let zrGroup = new zrender.Group()
            zrGroup.position = [0, 0]
            this.zrGroup = zrGroup
            this.zr.add(this.zrGroup)
        }
    }
</script>
<style lang="scss" scoped>
        .container{
            position:relative;
            margin:0 auto;
            width:90%;
        }
        .draw-container{
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
