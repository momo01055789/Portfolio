<template>
    <div id="work" class="work-section">
        <div class="work-box">
            <h1>ME-tv</h1>
            <p>An application that allows the user to search for movies,series,etc... and see details about them.I created it with vue.js and tmdb api.</p>
            <u><a href="https://metv-vue.netlify.app/" target="_blank">Visit website</a></u>
            <img src="../../public/metv2.jpg" alt="">
        </div>
        <div class="work-box">
            <h1>Mo-diner</h1>
            <p>It's responsive website that enables the user to search for recipes with their nutritional values.</p>
            <u><a href="https://mo-diner-vue.netlify.app/" target="_blank">Visit website</a></u>
            <img src="../../public/mo-diner.jpg" alt="">
        </div>
        <div class="work-box">
            <h1>LavForum</h1>
            <p>A website that enables the user to ask questions and reply to other questions . created with laravel and vuejs.</p>
            <u><a href="https://github.com/momo01055789/LavForum.git" target="_blank">Go to Repo</a></u>
            <img src="../../public/forum.jpg" alt="">
        </div>
        <a class="mainb" target="_blank" href="https://github.com/momo01055789?tab=repositories">Checkout other projects</a>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.work-section{
    width:100%;
    height:auto;
    background:#7A526A;
    padding:50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .work-box{        
        padding:25px;
        display: grid;
        grid-template-areas: 'header img'
                             'text img';
        h1{
            grid-area: header;
            font-family: 'Josefin Sans', sans-serif;
            color:#ECE6F3;
            font-size: 5rem;
            padding: 10px 20px;
        }
        p{
            grid-area:text;
            font-family: 'Josefin Sans', sans-serif;
            color:#ECE6F3;
            font-size: 3ch;
            padding: 10px 20px;
            text-transform: capitalize;
        }
        a{
            text-decoration:none;
            font-size:1.2rem;
            color:#ECE6F3;
            padding: 10px 20px;
        }
        a:hover{
            color: #F3F2FF;
            background-color: #8F7189;
            border-radius: 25px;
            transition: all .5s ease;
        }
        img{
            width:500px;
            grid-area:img;
            outline: 7px solid #ECE6F3;
            margin-top:25px;
            margin-right:25px;
        }
    }
        .mainb{
            text-decoration: none;
            color: #614153;
            background: #ECE6F3;
            padding: 20px 35px;
            border-radius: 20px;
            width:max-content;
            margin: 15px 40px;
            font-weight:700;
        }
        .mainb:hover{
            color:#ECE6F3;
            background:#85727D;
            transition:color,background .5s ease-out;
        }
        
}
@media screen and (max-width:990px) {
    .work-section{
        .work-box{
            grid-template-areas: 
            'img'
            'header'
            'text';

            img{width:100%;margin-bottom:25px;}
            h1{font-size:2rem;}
            p{font-size:1rem;}
            a{font-size:1.5rem;}
        }
    .mainb{margin:20px;padding:15px 25px;}
    }
}
@media screen and (max-width:500px){
    .work-section{
        .work-box{
        p{width: 100%;font-size: 1.8ch;}
        }
    }
}
@media screen and (max-width:500px){
    .work-section{
        .work-box{
            width:100vw;
       p{width: 100%;}
    }
    }
}

</style>