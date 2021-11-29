<template>
    <div class="relative ">
        <div class="flex items-center justify-between " >
        
            <div class="bg-homebtn rounded-xl w-24 h-10 mt-10 my-4 mx-6 ">
                
                <div class="text-white font-bold flex items-center ">
                    <div class="px-1"><img src="~@/assets/home.png" alt=""></div>
                    <p class="p-2.5">Home</p>
                    
                </div>
            </div>

            <div class="flex items-center mx-8 mt-4  " >
                <img class="mx-6" src="~@/assets/bussola.png" alt="">
                <img src="~@/assets/bell.png" alt="">
                <img class="mx-6" src="~@/assets/heart.png" alt="">
            </div>
       
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const Footer = defineComponent({
});

export default Footer;
</script>

<style>

</style>