import router from './index.js'

const obj=['login']
router.beforeEach((to, from, next) => {
    if(localStorage.getItem('token')){
        next()
    }else{
         if(to.name=='login'){
            next()
        }else{
            next({
                path:'/login'
            })
        }
        
    }
    console.log(to)
   
    
    
})