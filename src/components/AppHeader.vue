<template>
    <div class="header">
        <div id="NavBar" class="navbar px-4">
            <h1>Mohamed Elhadidy</h1>
             <div class="nav-list">
                <ul>
                    <li class="mx-5"><router-link :to="{path:'/aboutme',hash:'#about'}">About</router-link></li>
                    <li class="mx-5"><router-link :to="{path:'/work',hash:'#work'}">Work</router-link></li>
                </ul>
             </div>
                <div id="Hmenu" @click="show" class="hamburger-bttn">
                    <div class="btn_bar"></div>
                </div>
        </div>
        <div class="text-box">
            <span>frontend web developer</span><span>frontend web developer</span><span>frontend web developer</span><span>frontend web developer</span><span>frontend web developer</span><span>frontend web developer</span><span>frontend web developer</span><span>frontend web developer</span>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            show() {
                let list = document.querySelector('.nav-list')
                list.classList.toggle('open');
            }
        },
        
    }
</script>

<style lang="scss" scoped>
.header{
    background-color: #f3f2ff;
    border-bottom: 15px solid #7A526A;
    height:auto;
    .navbar{
        padding-top:15px;
        flex-wrap:nowrap;
        h1{
          color:#7A526A;
          text-shadow: 1px 5px #d7d1e3;
          padding:0;
          margin:0;
          font-size:2rem;
          font-family: 'Josefin Sans', sans-serif;
          font-weight: 800;
        }
        .nav-list{width:50%;}
        .nav-list ul{
            display:flex;
            list-style: none;
            justify-content: flex-end;
            margin-top: 1rem;
        }
        .nav-list.open{
            background: #F3F2FF;
            position: absolute;
            right: 0;
            left:0;
            top:50px;
            width:93%;
            padding:10px 0;
            border-radius: 10px;
            opacity: 0;
            border:2px solid #7A526A;
            margin: 35px auto;
            ul{
                padding:0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
                margin: 10px auto;
            }
            li{margin-bottom:10px;font-size:2.5ch}
            li a{
                color:#7A526A;
                font-size:2ch;
                font-weight:600;
            }
        }
        .nav-list ul li{
            font-size:1.8rem;
        }
        .nav-list ul li a{
            text-decoration:none;
            color:#0A0707;
            padding: 5px 30px;
        }
        .nav-list ul li a:hover{
            color: #F3F2FF;
            background-color: #8F7189;
            border-radius: 25px;
            transition: all .5s ease;
        }
        .hamburger-bttn{
            width:60px;
            height: 60px;
            border-radius:5px;
            background:#F3F2FF;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position:relative;
            cursor: pointer;
            display: none;
            .btn_bar{
                background: #7A526A;
                height: 5px;
                width: 80%;
                border-radius: 20px;
            }
            .btn_bar::before,
            .btn_bar::after{
                position:absolute;
                content: '';
                background: #7A526A;
                height: 5px;
                width: 80%;
                border-radius: 20px;
            }
            .btn_bar::before{transform: translateY(-12px);}
            .btn_bar::after{transform: translateY(12px);}
        }
    }
    .text-box{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 120px auto;
        width: 70%;
        border-radius: 15px;
        padding: 35px;
        overflow: hidden;
        border:10px solid #fff;
        box-shadow:5px 5px 20px #A590A8,
        -5px -5px 20px #A590A8;
        span{
            font-size:7.5rem;
            white-space: nowrap;
            font-family: 'Josefin Sans', sans-serif;
            color:#000;
            text-shadow: 8px 3px 0px #BDB0C6;
            animation: anim 5000ms linear infinite;
            padding:50px;
            text-transform: capitalize;
        }
    }
    }

@keyframes anim {
    0%{transform:translateX(0);}
    100%{transform:translateX(100%);}
}

@media screen and (max-width:500px) {
    .header{
        .navbar{
            h1{font-size:1.5rem;}
        }
    }
}

@media screen and (max-width:950px) {
    .header{
        .navbar{
            .nav-list{display: none;}
            .nav-list.open{display:flex;opacity: 1;}
            .nav-list.open ul{display:flex;}
            .hamburger-bttn{display: flex;}
        }
        .text-box{
            span{font-size:5ch;}
        }
    }
}
</style>