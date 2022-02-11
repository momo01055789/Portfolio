<template>
    <div class="footer">
        <h3>ME</h3>
        <div class="contacts">
            <h1>Contacts:</h1>
            <a href="https://www.facebook.com/moody.eldedy" target="_blank">Facebook</a>
            <span><img src="https://cdn-icons-png.flaticon.com/512/220/220236.png" alt=""> :01027629029</span>
        </div>
        <span class="cp">&copy;Created By Mohamed Elhadidy 2022</span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.footer{
    background:#53424C;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding:20px;
    h3{
        font-size: 3rem;
        font-family: "IBM Plex Serif", serif;
        color: #EDE9F3;
        border: 2px solid;
        border-radius: 10px;
        align-content: center;
        margin-top: 10px;
        padding: 10px;
        height: 3ch;
    }
    .contacts{
        display:flex;
        align-items: center;
        padding: 15px 0;
        h1{
            font-size:1.5rem;
            font-family:"IBM Plex Serif", serif;
            margin-bottom:0;
            color: #EDE9F3;
        }
        a{
            color: #EDE9F3;
            font-family:"IBM Plex Serif", serif;
            font-size:1rem;
            transition: color 150ms ease-out;
            width: max-content;
            font-weight: 600;
            padding: 5px 10px;
        }
        a:hover{color:#d197ba}
        span{
            color: #EDE9F3;
            font-weight: 800;
            img{
                width:20px;
                margin-bottom: 4px;
            }
        }
    }
    .cp{
        color: #EDE9F3;
        font-weight: 800;
    }
}

@media screen and (max-width:800px){
    .footer{
        flex-direction: column;
        .contacts{
            flex-direction:column;
        }
        .cp{font-size:1.4ch;}
    }
}
</style>