/* reset */
*{
    margin:0;
    padding:0;
    list-style-type:none;
    font-family: 'Microsoft Yahei', '微软雅黑', arial, 'Hiragino Sans GB', Helvetica;
}

label{
    cursor:pointer;
}

img{
    vertical-align:middle;
}

table{
    empty-cells:show;
    border-collapse:collapse;
    border-spacing:0;
}

abbr,acronym{
    border:0;
    font-variant:normal;
}

address,caption,cite,code,dfn,em,th,var,optgroup{
    font-style:normal;
    font-weight:normal;
}

input,button,textarea,select,optgroup,option{
    font-family:inherit;
    font-size:inherit;
    font-style:inherit;
    font-weight:inherit;
}

input,button,textarea,select{
    *font-size:100%;
}

a,img{
    border:0;
}

a,a:visited,a:hover{
    color:#5e5e5e; 
    text-decoration:none;
}

.clear{
    clear: both;
}

/*main*/
body{
    background-color: #ffffff;
    width: 100%;
}

.head{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    background-color: #f3f7fa;
    height: 70px;
    filter:alpha(opacity=90);
    -moz-opacity:0.9;
    opacity:0.9;
    -khtml-opacity: 0.9;  
}

.logo_img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 2px solid #ffffff;
    margin-bottom: 15px;
}

.head_logo_div,.head_nav_div{
    width: 50%;
    float: left;
}

.head_logo_div{
    line-height: 70px;
    text-align: center;
}

.head_nav_div{
    line-height: 70px;
}

.head_nav{
    margin: 0 auto;
}

.head_nav ul li{
    float: left;
    margin-right: 55px;
    cursor: pointer;
    font-size: 16px;
}

.head_nav ul li a{
    font-size: 16px;
    color: #333333;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -o-transition: all 0.2s;
    transform: all 0.2s;
}

.head_nav ul li a:hover{
    color:#4b91c9;
}

.wrapBox{
    top: 0;
    position: fixed;
    width: 100%;
    height: 100%;
}
/*
#wrapBox{
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -o-transition: all 1s;

}
*/
.box{
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
/*
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -o-transition: all 1s;
*/
}

.box01_content{  
    position: absolute;
    z-index: 3;
    top: 13%;
    left: 10%;
    width: 80%;
}

.head_div{
    width: 80%;
    margin:0 auto;
    height: 50%;
}

.cycle_item{
    background: url('../images/icon/cycle.svg') no-repeat;
    width: 400px;
    height: 400px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
}

.green_cycle{
    width: 260px;
    height: 260px;
    margin:0 auto;
    padding-top: 70px;
}

.yellow_cycle{
    display: inline-block;
    width: 240px;
    height: 240px;
    margin: 10px;
}

.blue_cycle{
    width: 220px;
    height: 220px;
    text-align: center;
    margin: 10px auto 10px auto;
}

.green_cycle_img,.yellow_cycle_img,.blue_cycle_img{
    position: absolute;
}

.head_img_div{
    position: relative;
    z-index: 2;
    display: inline;
    width: 200px;
    height: 200px;
    margin-top: 7px;
}

.head_img {
    display: inline-block;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 3px solid pink;
    margin: 7px;
    -webkit-animation: headneon 1.5s ease-in-out infinite alternate;
    -moz-animation: headneon 1.5s ease-in-out infinite alternate;
    animation: headneon 1.5s ease-in-out infinite alternate;
}

@-webkit-keyframes headneon {
    from {
        box-shadow: 0 0 1px #fff,
                    0 0 2px #fff,
                    0 0 3px #fff,
                    0 0 4px #fff;
    }
    to {
        box-shadow: 0 0 5px #fff,
                    0 0 10px #fff,
                    0 0 15px #fff,
                    0 0 20px #fff;
    }
}

@-moz-keyframes headneon {
    from {
        box-shadow: 0 0 1px #fff,
                    0 0 2px #fff,
                    0 0 3px #fff,
                    0 0 4px #fff;
    }
    to {
        box-shadow: 0 0 5px #fff,
                    0 0 10px #fff,
                    0 0 15px #fff,
                    0 0 20px #fff;
    }
}

.green_cycle_img{
    animation-name: clockwise;
    animation-duration:1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: normal;

    /*safari & Chrome */
    -webkit-animation-name:clockwise;
    -webkit-animation-duration:1s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-direction: normal;
}

.yellow_cycle_img{
    animation-name: anticlockwise;
    animation-duration:1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: normal;

    /*safari & Chrome */
    -webkit-animation-name:anticlockwise;
    -webkit-animation-duration:1s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-direction: normal;
}

.blue_cycle_img{
    animation-name: clockwise;
    animation-duration:1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: normal;

    /*safari & Chrome */
    -webkit-animation-name:clockwise;
    -webkit-animation-duration:1s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-direction: normal;
}

@keyframes clockwise{
    from {
        -webkit-transform:rotate(0deg);
        -moz-transform:rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
    }
    to {
        -webkit-transform:rotate(360deg);
        -moz-transform:rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
    }
}

@-webkit-keyframes clockwise{
    from {
        -webkit-transform:rotate(0deg);
    }
    to {
        -webkit-transform:rotate(360deg);
    }
}

@keyframes anticlockwise{
    from {
        -webkit-transform:rotate(0deg);
        -moz-transform:rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
    }
    to {
        -webkit-transform:rotate(-360deg);
        -moz-transform:rotate(-360deg);
        -ms-transform: rotate(-360deg);
        -o-transform: rotate(-360deg);
    }
}

@-webkit-keyframes anticlockwise{
    from {
        -webkit-transform:rotate(0deg);
    }
    to {
        -webkit-transform:rotate(-360deg);
    }
}

.cycle_item a{
    position: absolute;
    display: block;
    border-radius: 25px;
    width:120px;
    height: 50px;
    left: -50px;
    top: 180px;
}

.github_a{
    background-color: #42c9a3;
}


.github_icon{
    background: url('../images/icon/cloud.png') no-repeat;
    border-radius: 25px;
    display: block;
    width: 50px;
    height: 50px;
    position: relative;
    background-size: cover;
    -moz-background-size: cover;
    left: 5px;
}

.github_text,.weibo_text,.blog_text{
    width: 50px;
    margin-top: 0;
    left: 50px;
    text-align: right;
    padding: 0 5px;
    position: absolute;
    top: 0;
}

.item_name{
    font-size: 16px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    white-space: nowrap;
}

.weibo_a{
    background-color: #EAC251;
}
.weibo_a .weibo_icon{
    background: url('../images/icon/nav.png');
    border-radius: 25px;
    display: block;
    width: 50px;
    height: 50px;
    position: relative;
    background-size: cover;
    -moz-background-size: cover;
    left: 5px;
}


.blog_a{
    background-color: #6DB3D9;
}

.blog_a .blog_icon{
    background: url('../images/icon/blog.png');
    display: block;
    width: 50px;
    height: 50px;
    position: relative;
    background-size: cover;
    -moz-background-size: cover;
    left: 5px;
    top: -5px;
}

.nav_a{
    background-color: #6DB3D9;
}

.nav_a .nav_icon{
    background: url('../images/icon/nav.png');
    display: block;
    width: 50px;
    height: 50px;
    position: relative;
    background-size: cover;
    -moz-background-size: cover;
    left: 5px;
    top: -5px;
}

.box01_content h1,.box01_content h2,.box01_content p{
    color: #000000;
    font-weight: lighter;
    text-align: center;
}

.box01_content .title{
    font-size: 40px;
    margin-top: 10px; 
}

.box01_content .title_h2{
    font-size: 30px;
    margin-top: 10px;
    margin-bottom: 20px;
}

#box01_text{
    width: 100%;
    overflow: hidden;
    position: relative;
}

.box01_content .box01_p{
    font-size: 20px;
    font-weight: lighter;
    line-height: 38px;
    -webkit-transition: all ease 0.3s;
    -moz-transition: all ease 0.3s;
    -ms-transition: all ease 0.3s;
    transition: all ease 0.3s;
    filter:alpha(opacity=0);
    -moz-opacity:0;
    -khtml-opacity: 0;
    opacity: 0;
    cursor: pointer;
}

.box01_content .box01_p:hover{
    font-size: 22px;
}

.float_btn{
    z-index: 999;
    display: block;
    position: fixed;
    right: 40px;
    top: 50%;
}

.float_btn li{
    height: 12px;
    width: 12px;
    border: 1px solid #ffffff;
    border-radius: 50%;
    margin-bottom: 14px;
    background-color: transparent;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
}

.float_btn li:last-child{
    margin-bottom: 0;
}

.float_btn>.btn_on{
    background: #ffffff;
}

.arrow_div{
    z-index: 5;
    position: absolute;
    bottom: 50px;
    text-align: center;
    width: 100%;
}

.box_content{
    width: 80%;
    left: 10%;
    position: absolute;
    z-index: 2;
}

.box_content{
    top: 18%;
}

.shuxian{
    width: 1px;
    height: 100%;
    background-color: #42c9a3;
}

#box02_text{
    width: 50%;
    min-width: 400px;
    float: left;
    overflow: hidden;
    cursor: pointer;
}

#box02_text h1{
    font-size: 25px;
    font-weight: lighter;
    color: #000000;
    margin-top: 25px;
    text-align: center;
    position: relative;
    right: -100%;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transform: all 0.5s;
}

.overline{
    width: 100%;
    height: 0;
    border-bottom: 1px dashed #000000;
    position: relative;
    right: -100%;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transform: all 0.5s;
}

#box02_text p{
    font-size: 20px;
    font-weight: lighter;
    color: #000000;
    line-height: 38px;
    text-align: center;
    position: relative;
    right: -100%;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transform: all 0.5s;
}

#box02_text p:hover{
    font-size: 22px;
}

.box03_content{
    right: 19%;
    height: 60%;
    text-align: right;
    overflow: hidden;
}

.timeUl{
    height: 100%;
    width: 160%;
    position: relative;
    left: 0;
    -webkit-transition: all ease 0.8s;
    -moz-transition: all ease 0.8s;
    -ms-transition: all ease 0.8s;
    transition: all ease 0.8s;
}

.timeUl::before{
    content: ' ';
    top: 50%;
    position: absolute;
    height: 0;
    width: 100%;
    padding: 0 20px;
    border:1px dashed #ffffff;
    display: block;
}

.timeUl::after{
    content: '';
    display: table;
    clear: both;
}

.timeUl li{
    width: 25%;
    float: left;
    height: 100%;
    position: relative;
}

.timeUl li::before{
    content: ' ';
    top: 50%;
    left: 50%;
    position: absolute;
    height: 0;
    width: 12px;
    height: 12px;
    border: 4px solid #E7A98F;
    display: block;
    z-index: 35;
    background: #ffffff;
    border-radius: 50%;
    margin-top: -8px;
    margin-left: -8px;
}

.timeUl li div{
    height: 45%;
    width: 100%;
    background-color: #444444;
    filter:alpha(opacity=90);  
    -moz-opacity:0.9;  
    -khtml-opacity: 0.9;  
    opacity: 0.9;  
    text-align: center;
    color: #ffffff;
    box-shadow: 10px 10px 5px #000000;
}

.timeUl li:nth-child(2n) div{
    position: absolute;
    bottom: 10px;
}

.right_div,.left_div{
    z-index: 5;
    position: absolute;
    text-align: center;
    top: 50%;
}

.timeUl li div{
    font-weight: normal;    
}

.left_arrow,.right_arrow{
     margin-top: 52px;
}

.timeUl li div h1{
    line-height: 40px;
    font-size: 28px;
    font-weight: lighter;
}

.timeUl li div p{
    line-height: 28px;
    font-size: 18px;
    font-weight: lighter;
}

.right_div{
    right: 0;
}

.box04_content{
    left: 10%;
    height: 80%;
    overflow: hidden;
}

.box04_title{
    font-size: 25px;
    font-weight: lighter;
    text-align: center;
    color: #ffffff;
}


.hobby_content{
    padding: 15px 0 0 0;
}

.hobby_content li{
    width: 30%;
    float: left;
}

.hobby_img_div{
    position: relative;
    text-align: center;
    height: 280px;
}

.spinner{
    width: 230px;
    height: 230px;
    margin: 0 auto;
    border-radius: 50%;
    -webkit-transition: all 0.8s ease-in-out;
    -moz-transition: all 0.8s ease-in-out;
    transition: all 0.8s ease-in-out;
    filter:alpha(opacity=80);
    -moz-opacity:0.8;
    opacity:0.8;
    -khtml-opacity: 0.8;
    -webkit-animation: headneon 1.5s ease-in-out infinite alternate;
    -moz-animation: headneon 1.5s ease-in-out infinite alternate;
    animation: headneon 1.5s ease-in-out infinite alternate;
}

.spinner_01{
    border: 10px solid #ecab18;
    border-right-color: #1ad280;
    border-bottom-color: #1ad280;
}

.spinner_02{
    border: 10px solid #ff9933;
    border-right-color: #3366cc;
    border-bottom-color: #3366cc;
}

.spinner_03{
    border: 10px solid #339933;
    border-right-color: #cc9900;
    border-bottom-color: #cc9900;
}

.hobby_img{
    position: absolute;
    top: 10px;
    bottom: 0;
    left: 50%;
    margin-left: -115px;
    right: 0;
    width: 230px;
    height: 230px;
    border-radius: 50%;
}

.hobby_img_info{
    position: absolute;
    top: 10px;
    bottom: 0;
    left: 50%;
    margin-left: -115px;
    right: 0;
    width: 230px;
    height: 230px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.6);
    filter:alpha(opacity=0);
    -moz-opacity:0;
    opacity:0;
    -khtml-opacity: 0;
    -webkit-transition: all 0.8s ease-in-out;
    -moz-transition: all 0.8s ease-in-out;
    transition: all 0.8s ease-in-out;
}

.hobby_img_info h1{
    margin:80px 45px 0 45px;
    line-height: 40px;
    font-size: 25px;
    color: #ffffff;
    font-weight: lighter;
    border-bottom: 1px solid #ffffff;
}

.hobby_img_info h2{
    color: #bbb;
    font-size: 18px;
    line-height: 35px;
    font-style: italic;
}

.hobby_img img{
    width: 230px;
    height: 230px;
    border-radius: 50%;    
}

.hobby_img_div:hover .spinner{
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
}

.hobby_img_div:hover .hobby_img_info{
    filter:alpha(opacity=100);
    -moz-opacity:1;
    opacity:1;
    -khtml-opacity: 1;
}

.hobby_text_div{
    padding: 0 30px;
    color: #DADADA;
}

.hobby_text_div p{
    text-indent:2em;
    padding: 0.2em 0;
    font-size: 19px;
    font-weight: lighter;
}

.hobby_text_div p a{
    color: #EEEEEE;
    font-weight: lighter;
    text-decoration: underline;
}

.hobby_01{
    background: rgba(140, 131, 131, 0.6);
    padding: 15px 0 15px 0;
    margin-right: 3%;
    border-radius: 10px;
}

.hobby_02{
    background: rgba(132, 59, 59, 0.6);
    padding: 15px 0 10px 0;
    margin-right: 3%;
    border-radius: 10px;
}

.hobby_03{
    background: rgba(114, 53, 134, 0.6);
    padding: 15px 0 10px 0;
    border-radius: 10px;
}

.hobby_03 .hobby_text_div p a{
    color: #969292;
}

.foot{
    width: 100%;
    background: #ffffff;
    position: relative;
    padding-top: 60px;
    display: block;
}

.foot_info_main{
    width: 62%;
    margin: 0 auto;
    padding-bottom: 60px;
    border-bottom: 1px solid #eeeeee;
}

.foot_info_main ul{
    width: 100%;
}

.foot_info_main ul li{
    width: 32%;
    margin: 0px 0 16px 0;
    text-align: center;
    border: #ffffff solid 5px;
    float: left;
    cursor: pointer;
}

.foot_info_main ul li:hover{
    border-color: #bbb;
}


.foot_info_main ul li a{
    display: block;
    width: 100%;
    height: 100%;
    padding: 10px 0;
    font-size: 20px;
    color: #FEFEFE;
    text-decoration: none;
    font-variant: small-caps;
    background-position: 16px center;
    background-repeat: no-repeat;
    background-size: 30px;
}

.github_items{
    background:rgba(0,0,0,0.8)
}

.github_items a{
    background-color: rgba(0,0,0,0.8);
    background: url(../images/icon/github_white.png);
}


.QQ_items{
    background:rgba(59,89,152,0.8);
}

.QQ_items a{
    background-color:rgba(59,89,152,0.8);
    background: url(../images/icon/QQ.png);
}



.weibo_items{
    background:rgba(189,64,64,0.8);
}

.weibo_items a{
    background-color:rgba(189,64,64,0.8);
    background: url(../images/icon/weibo.png);
}

.zhihu_items{
    background:rgba(6,100,195,0.8);
}

.zhihu_items a{
    background-color:rgba(6,100,195,0.8);
    background: url(../images/icon/zhihu.png);
}



.blog_items{
    background:rgba(153,0,102,0.8);
}

.blog_items a{
    background-color:rgba(153,0,102,0.8);
    background: url(../favicon.ico);
}


.email_items{
    background:rgba(51,153,102,0.8);
}

.email_items a{
    background-color:rgba(51,153,102,0.8);
    background: url(../images/icon/email.png);
}

.foot_title{
     font-variant: small-caps;
     color: black;
     font-size: 20px;
     line-height: 30px;
     text-align: center;
}



.foot_power{
    text-align: center;
    padding: 30px 0;
}

.foot_power h3{
    font-size: 16px;
    color: #999999;
    font-weight: normal;
}

.foot_power h3 a{
    color: #999999;
    font-weight: normal;
}

.box_bg{
    position: absolute;
}

.nav_li_on{
    color: red;
}

.hobby_img_info_mob{
    display: none;
}

@media screen and (max-width: 1100px){
    .head{
        height: 70px
    }
    
    .head_logo_div{
        width: 30%;
    }
    
    .head_nav_div{
        width: 70%;
        font-size: 16px;
    }
    
    .head .head_nav ul li{
        margin-right: 40px;
    }
    
    .box01_content{
        width: 100%;
        left: 0;
    }
    
    .box_content{
        left: 0;
        width: 100%;
    }
    
    #box02_text{
        display: none;
    }
    
    .box02_content #bar_container{
        width: 90%;
        margin: 0 auto;
        float: none;
    }
    
    .box04_content{
        width: auto;
        top: 10%;
    }
    
    #bar_container .bar{
        margin: 30px 0;
    }
    
    .box03_content .right_div,.box03_content .left_div{
        top: 80%;
    }
    
    .box03_content{
        width: 90%;
        left: 5%;
    }
    
    .float_btn{
        right: 1em;
    }
    
    .box04_content{
        padding: 1em 0 0 0;
    }
    
    .hobby_img_div{
        display: none;
    }
    
    .hobby_content li{
        width: 90%;
        margin: 0.5em auto;
        float: none;
    }
    
    .hobby_img_info_mob{
        display: block;
    }
    
    .hobby_img_info_mob h1{
        line-height: 40px;
        font-size: 25px;
        color: #ffffff;
        font-weight: lighter;
        border-bottom: 1px solid #ffffff;
        display: inline-block;
    }

    .hobby_img_info_mob a{
        color: #bbb;
        font-size: 18px;
        line-height: 35px;
        font-style: italic;
    }
    
    .foot_info_main{
        width: 90%;
        margin: 0 auto;
    }
    
    .foot_info_main ul li{
         margin: 0px 0 16px 0;
         width: 20%;
            
    }
    
    .foot_info_main ul li a{
        background: none;
    }
}

@media screen and (max-width: 700px){
    .head{
        height: 3rem;    
    }
    
    .head_logo_div{
        width: 100%;
        height: 3rem;
        line-height: 3rem;
    }
    
    .head_nav_div{
        display: none;
    }
    
    .box01_content{
        top: 0;
    }
    
    .head_div{
        width: 100%;
    }
    
    .cycle_item {
        width: 100%;
        height: auto;
        margin: 0 auto;
        background: none;
    }
    
    .cycle_item a{
        display: none;
    }
    
    .green_cycle{
        padding-top: 3.2em;
    }
    
    
    .box01_content .title{
        font-size: 1em;
    }
    
    .box01_content .title_h2{
        font-size: 1rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
    
    .box01_content .box01_p{
        font-size: 0.8rem;
        line-height: 1.6rem;
    }
    
    .box02_content{
        top: 5rem;
        width: 100%;
        height: auto;
    }
    
    .logo_img{
        width: 2.5rem;
        height: 2.5rem;
        margin-bottom: 0.1rem;
    }
    
    #bar_container .bar{
        margin: 0.5rem 0;
    }
    
    .bar{
        height: 2rem;
        font-size: 0.8rem;
    }
    
    #bar_container .bar:before {
        position: absolute;
        padding: 0.5rem;
        height: 2rem;
    }
    
     #bar_container .bar:after {
        position: absolute;
        padding: 0.5rem;
        height: 2rem;
        right: -3rem;
    }
    
    .box03_content{
        width: 90%;
        left: 5%;
        top: 3.2rem;
        height: auto;
    }
    
    .timeUl{
        width: auto;
        height: auto;
    }
    
    .timeUl::before {
        display: none;
    }
    
    .timeUl li {
        width: 100%;
        height: auto;
        float: none;
        position: relative;
        margin-top: 0.6rem;
    }
    
    .timeUl li:nth-child(2n) div{
        position: relative;
        bottom: auto;
}
    
    .timeUl li::before{
        display: none;
    }
    
    .timeUl li div{
        font-weight: lighter;
        height: auto;
        box-shadow: 0.6rem 0.6rem 0.3rem  #000000;
        padding: 0.3rem 0;
    }
    
    .timeUl li div h1{
        line-height: 1.2rem;
        font-size: 1rem;
    }
    
    .timeUl li div p{
        line-height: 1rem;
        font-size: 0.8rem;
    }
    
    .box03_content .right_div, .box03_content .left_div{
        display: none;
    }
    
    .arrow_div{
        bottom: 1rem;
    }
    
    .box04_content{
        top: 3.2rem;
        padding: 0;
        height: auto;
    }
    
    .box04_title{
        margin-top: 1.5rem;
        font-variant: small-caps;
        margin-top: 1rem;
        line-height: 2rem;
    }
    
    .hobby_content{
        padding: 0;
    }
    
    .hobby_text_div{
        padding: 0 0.5rem;
    }
    
    .hobby_img_info_mob h1{
        font-size: 1rem;
        line-height: 1.2rem;
    }
    
    .hobby_img_info_mob h1 a{
        font-size: 0.8rem;
        line-height: 1.2rem;
    }
    
    .hobby_text_div p{
        padding: 0;
        font-size: 0.9rem;
        font-weight: normal;
        margin-top: 0.5rem;
    }
    
    .hobby_text_div .about_p{
        display: none;
    }
    
    .foot{
        padding-top: 0.5rem;
    }
    
    .foot_title{
        font-size: 1rem;
        line-height: 1.2rem;
    }
    
    .foot_info_main ul li{
        width: 45%;
        margin: 0px 0 0.2rem 0;
    }
    
    .foot_info_main ul li a{
        font-size: 1rem;
    }
    
    .qrcode_div{
        margin-top: 0.8rem;
    }
    
    .qrcode_div span{
       width: 2rem;
       height: 2rem;
       background-size: 2rem;
    }
    
    .qrcode_div span img{
       width: 8rem;
       height: 8rem;
       display: none;
       top: -9rem;
       left: -3.5rem;
    }
    
    .weixin_icon{
        width: 2rem;
        height: 2rem;
        background-size: 2rem;
    }

    .dingding_icon{
        width: 2rem;
        height: 2rem;
        background-size: 2rem;
    }
    
    .qq_icon{
        width: 2rem;
        height: 2rem;
        background-size: 2rem;
    }
    
    .weixin,.dingding{
        margin-right: 0.5rem;
    }
    
    .foot_info_main{
        padding-bottom: 1rem;
    }
    
    .foot_power{
        padding: 1rem 0;
    }
    
    .foot_power h3{
        font-size: 0.8rem;
    }
    
    #bar_container .bar.mint {
        border-bottom: 0.2rem solid #0d7e68;
    }

    #bar_container .bar.red {
        border-bottom: 0.2rem solid #9f292a;
    }

    #bar_container .bar.orange {
        border-bottom: 0.2rem solid #dd481b;
    }

    #bar_container .bar.lila {
        border-bottom: 5px solid #2a242c;
    }

    #bar_container .bar.gray {
        border-bottom: 5px solid #333434;
    }

    #bar_container .bar.blue {
        border-bottom: 5px solid #333434;
    }

    #bar_container .bar.green {
        border-bottom: 5px solid #dd481b;
    }
}