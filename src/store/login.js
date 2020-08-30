

const state={
    name:''||localStorage.getItem('name'),
    quan:''||localStorage.getItem('quan'),
    token:''||localStorage.getItem('token')
}

const mutations= {
    DENG(state,data){
       var admin='putong'
        localStorage.setItem('name',data.name)
        localStorage.setItem('quan',admin)
        localStorage.setItem('token',123)
        state.name=data.name
        state.quan=admin
        state.token=123

    }
}
const actions= {
     async deng({commit},data){
        let cc= await new Promise((res,rej)=>{
            setTimeout(() => {
                res('成功')
            }, 2000);
        })
        commit('DENG',data)
        return cc
        
    }
}

export default  {
    namespaced: true,
    state,
    mutations,
    actions
}