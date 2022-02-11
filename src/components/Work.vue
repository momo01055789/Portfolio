<template>
    <div id="work" class="work-section">
        <div class="work-box">
            <h1>ChatApp</h1>
            <p>one to one chatting app created with laravel pusher and vuejs.</p>
            <u><a href="https://github.com/momo01055789/ChatApp.git" target="_blank">Go to Repo</a></u>
            <img src="../../public/chat.jpg" alt="">
        </div>
        <div class="work-box">
            <h1>Momovie</h1>
            <p>It's an application that enables the user to search for movies,shows,etc and see details about them.Created with Vuejs and laravel.</p>
            <u><a href="https://github.com/momo01055789/Momovies.git" target="_blank">Go to Repo</a></u>
            <img src="../../public/cinema.jpg" alt="">
        </div>
        <div class="work-box">
            <h1>LavForum</h1>
            <p>A website that enables the user to ask questions and reply to other questions.created with laravel and vuejs.</p>
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
            font-size: 1.5rem;
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
            border-radius: 21px;
            outline: 7px solid #ECE6F3;
            margin-top:25px;
            margin-right:25px;
        }
    }
        .mainb{
            text-decoration: none;
            color: #53424C;
            background: #ECE6F3;
            padding: 15px 25px;
            border-radius: 20px;
            width:max-content;
            margin: 15px 40px;
        }
        .mainb:hover{
            color:#ECE6F3;
            background:#85727D;
            transition:color,background .5s ease-out;
        }
        
}
@media screen and (max-width:950px) {
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
    .mainb{margin:20px;}
    }
}
@media screen and (max-width:400px){
    .work-section{
        .work-box{
       p{width: 20ch;}
    }
    }
}

</style>