<template>
    <div>
        <h3 class="flex justify-start mx-3 mt-8 my-4 font-bold">Popular categories</h3>
        <div class="flex justify-between justify-center px-4">
            <div>
                <div class=" h-10 w-10 bg-red-500  rounded-3xl "> <img src="~@/assets/travel.png" alt=""></div>
                <p class="text-center text-gray-400">Trips</p>
            </div>
            <div>
                <div class=" h-10 w-10 bg-red-500  rounded-3xl "> <img src="~@/assets/Hotel.png" alt=""></div>
                <p class="text-center text-gray-400">Hotel</p>
            </div>
            
            <div class="justify-center">
                <div class=" h-10 w-10 bg-red-500  rounded-3xl mx-4 "> <img src="~@/assets/transport.png" alt=""></div>
                <p class="text-center text-gray-400">Transport</p>
            </div>
            
            <div>
                <div class=" h-10 w-10 bg-red-500  rounded-3xl "> <img src="~@/assets/Events.png" alt=""> </div>
                <p class="text-center text-gray-400">Events</p>
            </div>
        </div>

   
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const Categories = defineComponent({
});

export default Categories;
</script>

<style>

</style>