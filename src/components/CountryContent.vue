<template>
    <div class="bg-gray-500 w-32 h-40 rounded-3xl  " :class="wallpaper">
       
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const CountryContent = defineComponent({
    props : {
        wallpaper  :{
            type : String,
            required : true
        }
    }

});

export default CountryContent;
</script>

<style>

</style>