<template>
    <div class="mt-64 flex  mx-3 ">
        <ul class="flex mx-auto ">
            <li  class="text-gray-400 hover:bg-red700">All</li>
            <li class="mx-8 text-gray-400">America</li>
            <li class="text-gray-400" >Europe</li>
            <li class="mx-8 text-gray-400" >Asia</li>
            <li class="text-gray-400">Ocenia</li>
        </ul>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const CountryList = defineComponent({

});

export default CountryList;
</script>

<style>

</style>