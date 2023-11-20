<template lang="">
    <div class="hearder">
       <!--  <div class="title">
        <a href="/"><h2> HSH portfolio </h2></a>  
        </div> -->
        
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
        height: 5vh;
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* box-shadow: 0px 0px 20px #aeacac; */
        .title{
            text-align: center;
            margin-left: 210px;
            font-family: 'Cafe24Shiningstar';
            font-size: 24px;
        }
        &:hover{
            color: red;
        }
    }
    /* ===media 1600 === */
    @media (max-width: 1600px) {
        .hearder{
        width: 100%;
        height: 5vh;
        position: fixed;
        display: flex;
        align-items: center;
        .title{
            text-align: center;
            margin-left: 125px;
            font-family: 'Cafe24Shiningstar';
            font-size: 25px;
        }
    }
    }
    
    /* ===media 1024 === */
    @media (max-width: 1024px) {
        .hearder{
        width: 100%;
        height: 5vh;
        position: fixed;
        display: flex;
        align-items: center;
        .title{
            text-align: center;
            margin-left: 125px;
            font-family: 'Cafe24Shiningstar';
            font-size: 25px;
        }
    }
    }
    /* ===media 780 === */
    @media (max-width: 780px) {
        .hearder{
        width: 100%;
        height: 5vh;
        position: fixed;
        display: flex;
        align-items: center;
        .title{
            text-align: center;
            margin-left: 280px;
            font-family: 'Cafe24Shiningstar';
            font-size: 25px;
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