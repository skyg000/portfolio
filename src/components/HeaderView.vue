<template lang="">
    <div class="hearder">
        <div class="title">
        <a href="/"><h2> Hyeon Stagram </h2></a>  
        </div>
        <div class="titinfo">
        <p> <a href="mailto:skyg000@naver.com" class="mail">skyg000@naver.com </a></p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
@font-face {
    font-family: 'Cafe24Shiningstar';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Shiningstar.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

    .hearder{
        width: 100%;
        height: 7vh;
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px 0px 20px #aeacac;
        .title{
            text-align: center;
            margin-left: 45%;
            font-family: 'Cafe24Shiningstar';
            font-size: 24px;
        }
        .titinfo{
            display: flex;
            p{
                margin: 0 150px;
            }
        }
    }
    
    /* ===media 1024 === */
    @media (max-width: 1024px) {
        .hearder{
        width: 100%;
        height: 7vh;
        position: fixed;
        display: flex;
        align-items: center;
        box-shadow: 0px 0px 20px #aeacac;
        .title{
            text-align: center;
            margin-left: 45%;
            font-family: 'Cafe24Shiningstar';
            font-size: 25px;
        }
        .titinfo{
            display: flex;
            p{
                display: none;
                margin: 0 50px;
            }
        }
    }
    }
    /* ===media 375 === */
    @media (max-width: 480px) {
        .hearder{
        .title{
            margin-left: 40%;
            font-size: 20px;
        }
    }
    }
</style>