<template>
    <div class="main-content">
        <div id="about" class="info-box">
            <h1>About me</h1>
            <p>My name is Mohamed Elhadidy.I am an Egyptian Frontend Developer with some backend web development Background.I started coding in 2020 and i fell in love with it.To me web development isn't just about writing code and solving bugs, it also enables me to be creative.</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.main-content{
    min-height:65vh;
    width:100%;
    background:#7A526A;
    padding:75px;
    .info-box{
        width: 90%;
        background: #fefdff;
        margin: 0 auto;
        border-radius: 25px;
        padding: 35px;
        h1{
            font-size:4rem;
            font-family:'Josefin Sans', sans-serif;
        }
        p{
            font-size: 2rem;
            font-family: "Josefin Sans", sans-serif;
            line-height: 1.4;
            text-transform: capitalize;
        }
    }
}

@media screen and (max-width:660px){
    .main-content{
        .info-box{
            h1{font-size:3.2ch;}
            p{font-size:2ch;}
        }
    }
}
@media screen and (max-width:450px){
    .main-content{
        padding: 25px 15px;
        .info-box{
            width: 100%;
            h1{font-size:2.6ch;}
            p{font-size:1.8ch;line-height: 2;}
        }
    }
}
@media screen and (max-width:300px){
    .main-content{
        padding: 25px 15px;
        .info-box{
            width: 100%;
            h1{font-size:2.6ch;text-align: center;}
            p{font-size:1.5ch;line-height: 2;}
        }
    }
}
</style>
