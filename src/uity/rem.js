(
   function(){
       
        if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { //移动端
            let kuan=window.document.documentElement.clientWidth
        window.document.documentElement.style.fontSize=kuan/375*10+'px '
        }else{
            window.onresize=function(){
            let kuan=window.document.documentElement.clientWidth
            window.document.documentElement.style.fontSize=kuan/375*10+'px '
        }
        }
   }
   
    

)()
