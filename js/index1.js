let app =new Vue({
    el:'#search',
    data:{
        inputValue:'',
        results:'',
    },
    methods:{
        search(){
            // alert(this.inputValue)
            axios({
                // url:'../json/music.json',
                url:'http://localhost:3000/data/',
                method:'get',
            }).then(res=>{
                console.log(res)
                // this.results = res.data.hotkey.k
            })
        }
    },
})

var slider = new Vue({
    el: "#slider",
    data: {
        imgArr: [
            '../image/188.png',
            '../image/270*270给.jpg',
            '../image/300*400.jpg',
            '../image/伪装学渣170*100.jpg',
            '../image/将进酒170*100.jpg'   
            // 图片理论上是可以无限加的
        ],
        linkArr: [
            "https://www.sina.com.cn",
            "https://www.sohu.com",
            "http://www.ifeng.com",
            "https://www.qq.com",
            "https://www.163.com",
            //跳转的路径数量要和图片数量保持一致
        ],
        index: 0,
    },
    created() {
        //启动自动轮播banner图...5秒一换（可根据需要调整banner轮播速度）
        window.setInterval(this.next, 5000);//1秒=1000*毫秒
    },
    methods: {
        next() {
            //点击切换下一图：
            if (this.index < this.imgArr.length - 1) {
                this.index++;
            }
            else {
                this.index = 0;//循环到第1图
            }
        },
        pervie() {
            //点击切换上一图：
            if (this.index > 0) {
                this.index--;
            }
            else {
                this.index = this.imgArr.length - 1;
            }
        },           
        click_banner(i) {
            this.index = i;//点击跳转到指定的图
        },
    }

});
var rightbox = new Vue({
    el: "#rightbox",
    data: {
        imgArr: [
            '../image/188.png',
            '../image/270*270给.jpg',
            '../image/300*400.jpg',
            // 图片理论上是可以无限加的
        ],
        linkArr: [
            "https://www.sina.com.cn",
            "https://www.sohu.com",
            "http://www.ifeng.com",
            //跳转的路径数量要和图片数量保持一致
        ],
        index: 0,
    },
    created() {
        //启动自动轮播banner图...5秒一换（可根据需要调整banner轮播速度）
        window.setInterval(this.next, 5000);//1秒=1000*毫秒
    },
    methods: {
        next() {
            //点击切换下一图：
            if (this.index < this.imgArr.length - 1) {
                this.index++;
            }
            else {
                this.index = 0;//循环到第1图
            }
        },     
        click_banner(i) {
            this.index = i;//点击跳转到指定的图
        },
    }

});


// let slider = new Vue({
//     el:'#slider',
//     data:{
//         SCR:['../image/188.png','../image/270*270给.jpg','../image/300*400.jpg','../image/伪装学渣170*100.jpg','../image/将进酒170*100.jpg'],
//         isactive1:'none',
//         isactive2:'block',
//         isactive3:'none',
//         isactive4:'none',
//         isactive5:'none',
//         licolor1:'',
//         licolor2:'rgb(89, 58, 129)',
//         licolor3:'',
//         licolor4:'',
//         licolor5:'',
//     },
//     methods:{
//         rightclick(){
//             if(this.isactive1==='block'){
//                 this.isactive1='none',
//                 this.isactive2='block'
//                 this.licolor1='',
//                 this.licolor2='rgb(89, 58, 129)'

//             }else{
//                 if (this.isactive2==='block') {
//                     this.isactive2='none',
//                     this.isactive3='block',
//                     this.licolor2='',
//                     this.licolor3='rgb(89, 58, 129)'
//                 }else{
//                     if (this.isactive3==='block') {
//                         this.isactive3='none',
//                         this.isactive4='block',
//                         this.licolor3='',
//                         this.licolor4='rgb(89, 58, 129)'
//                     }else{
//                         if (this.isactive4==='block') {
//                             this.isactive4='none',
//                             this.isactive5='block',
//                             this.licolor4='',
//                             this.licolor5='rgb(89, 58, 129)'
//                         }else{
//                             if (this.isactive5==='block') {
//                                 this.isactive5='none',
//                                 this.isactive1='block'
//                                 this.licolor5='',
//                                 this.licolor1='rgb(89, 58, 129)'
//                             }
//                         }
//                     }
//                 }
//             }
    
//         },
//         leftclick(){
//             if(this.isactive1==='block'){
//                 this.isactive1='none',
//                 this.isactive5='block',
//                 this.licolor1='',
//                 this.licolor5='rgb(89, 58, 129)'
//             }else{
//                 if (this.isactive2==='block') {
//                     this.isactive2='none',
//                     this.isactive1='block',
//                     this.licolor2='',
//                     this.licolor1='rgb(89, 58, 129)'
//                 }else{
//                     if (this.isactive3==='block') {
//                         this.isactive3='none',
//                         this.isactive2='block',
//                         this.licolor3='',
//                         this.licolor2='rgb(89, 58, 129)'
//                     }else{
//                         if (this.isactive4==='block') {
//                             this.isactive4='none',
//                             this.isactive3='block',
//                             this.licolor4='',
//                             this.licolor3='rgb(89, 58, 129)'
//                         }else{
//                             if (this.isactive5==='block') {
//                                 this.isactive5='none',
//                                 this.isactive4='block',
//                                 this.licolor5='',
//                                 this.licolor4='rgb(89, 58, 129)'
//                             }
//                         }
//                     }
//                 }
//             }
    
//         },
//         centerclick1(){
//             if(this.isactive1==='block'){
//             }else{
//                 this.isactive1='block',
//                 this.licolor1='rgb(89, 58, 129)',
//                 this.isactive2=this.isactive3=this.isactive4=this.isactive5='none',
//                 this.licolor2=this.licolor3=this.licolor4=this.licolor5=''
//             }
//         },
//         centerclick2(){
//             if(this.isactive2==='block'){
//             }else{
//                 this.isactive2='block',
//                 this.licolor2='rgb(89, 58, 129)',
//                 this.isactive1=this.isactive3=this.isactive4=this.isactive5='none',
//                 this.licolor1=this.licolor3=this.licolor4=this.licolor5=''
//             }
//         },
//         centerclick3(){
//             if(this.isactive3==='block'){
//             }else{
//                 this.isactive3='block',
//                 this.licolor3='rgb(89, 58, 129)',
//                 this.isactive2=this.isactive1=this.isactive4=this.isactive5='none',
//                 this.licolor2=this.licolor1=this.licolor4=this.licolor5=''
//             }
//         },
//         centerclick4(){
//             if(this.isactive4==='block'){
//             }else{
//                 this.isactive4='block',
//                 this.licolor4='rgb(89, 58, 129)',
//                 this.isactive2=this.isactive3=this.isactive1=this.isactive5='none',
//                 this.licolor2=this.licolor3=this.licolor1=this.licolor5=''
//             }
//         },
//         centerclick5(){
//             if(this.isactive5==='block'){
//             }else{
//                 this.isactive5='block',
//                 this.licolor5='rgb(89, 58, 129)',
//                 this.isactive2=this.isactive3=this.isactive4=this.isactive1='none',
//                 this.licolor2=this.licolor3=this.licolor4=this.licolor1=''
//             }
//         },    
//     }
// })

// let rightbox = new Vue({
//     el:'#rightbox',
//     data:{
//         isactive1:'none',
//         isactive2:'block',
//         isactive3:'none',
//         licolor1:'',
//         licolor2:'rgb(89, 58, 129)',
//         licolor3:'',
//     },
//     methods:{
//         centerclick1(){
//             if(this.isactive1==='block'){
//             }else{
//                 this.isactive1='block',
//                 this.licolor1='rgb(89, 58, 129)',
//                 this.isactive2=this.isactive3=this.isactive4=this.isactive5='none',
//                 this.licolor2=this.licolor3=this.licolor4=this.licolor5=''
//             }
//         },
//         centerclick2(){
//             if(this.isactive2==='block'){
//             }else{
//                 this.isactive2='block',
//                 this.licolor2='rgb(89, 58, 129)',
//                 this.isactive1=this.isactive3=this.isactive4=this.isactive5='none',
//                 this.licolor1=this.licolor3=this.licolor4=this.licolor5=''
//             }
//         },
//         centerclick3(){
//             if(this.isactive3==='block'){
//             }else{
//                 this.isactive3='block',
//                 this.licolor3='rgb(89, 58, 129)',
//                 this.isactive2=this.isactive1=this.isactive4=this.isactive5='none',
//                 this.licolor2=this.licolor1=this.licolor4=this.licolor5=''
//             }
//         }
//     }
    
// })

var vm = new Vue({
    el:"#bookname",
    data:{
        booknameList:['nou','nshdi','shdiadh','wshisfhfs','shdifdhs','sdhisdh','sdhisdsdf','fshifhsf','sdhishf','dfdfdg','dfsdg','dgsdgsdg','dgsdgsd','sdgsdg'],
    },
})


var vm = new Vue({
    el:"#book",
    data:{
        booknameList:['nou','nshdi','shdiadh','wshisfhfs','shdifdhs','sdhisdh','sdhisdsdf','fshifhsf','sdhishf','dfdfdg','dfsdg','dgsdgsdg','dgsdgsd','sdgsdg'],
    },
})

// axios
//     .get('http//localhost:3000/data/')
//     .then((res)=>{
//         if(status===200){
//             console.log(res)
//         }       
//     })
//     .catch((err)=>{
//     })
// axios({
//     // url:'../json/music.json',
//     url:'http://localhost:3000/data/',
//     method:'get',
// }).then(res=>{
//     console.log(res)
//     // this.results = res.data.hotkey.k


// var vm = new Vue({
//     el:"#musicRank",
//     data:{
//         musicName:'sfsf',
//         musicAuthor:'fsfs',
//     },
// })