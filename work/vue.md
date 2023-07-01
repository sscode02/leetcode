1. 模板工作原理
    <template>
        <button  @click="handler">click me {{a}}</button>
    </template>
    
    export default {
        data(){
            return {
                a:0
            }
        },
        methods(){
            handler(){
                this.a++
            }
        }
    }

    在这里会通过 编译器 把模板内容编译成渲染函数 

      export default {
        data(){
            return {
            
            }
        },
        methods(){
            handler(){
                
            }
        },
        render(){
            return h('div',{onclick: handler},'hello')
        }
    }

然后通过 渲染器 把渲染函数返回的 虚拟dom 渲染成真实dom
