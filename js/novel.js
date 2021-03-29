let floatBox = new Vue({
    el:'#floatBox',
    data:{
        isactive:'none',
        isactive1:'none',
    },
    methods:{
        displaymodule(){
            if (this.isactive==='none'){
                this.isactive='block',
                this.isactive1='none'
            }else{
                this.isactive='none'
            }           
        },
        displaymodule1(){
            if (this.isactive1==='none'){
                this.isactive1='block'
                this.isactive='none'
            }else{
                this.isactive1='none'
            }
        },
    }
})