function people(){ // 参数传递
    console.log('people')

    let flag
    let timer 
     
    return {
        work(){
            timer = setTimeout(()=>{
              console.log('work')
            })
          if(flag){ 
            clearTimeout(timer)
            console.log(flag)
            flag.then(()=>{
                console.log('work')
              })
          } 

          return this
        },
        sleepBefor(){
            clearTimeout(timer)
            new Promise(()=>{
                setTimeout(()=>{
                    console.log('sleepbefor')
                    this.work()
                },3000)
                
            })
            return this
        },
        sleep(){
            flag = new Promise(()=>{
                setTimeout(()=>{
                    console.log('sleep')
                })
            })
            return this 
        }
    }
}

people().sleep().work()

