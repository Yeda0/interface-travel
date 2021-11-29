<template>
    <div >
        <div>
            <Header/>
        </div>

        <div>
            <Text/>
            
        </div>

        <div>
            <Search/>
            
        </div>

        <div>
            <CountryList/>
        </div>

        <div class="flex justify-center mt-6 ">
            <CountryContent class="mx-3" wallpaper="bg-tajmahal bg-cover bg-auto" />
            <CountryContent class="mx-3" wallpaper="bg-toureiffel bg-cover bg-auto" />
        </div>

        <div class="mt-4">
            <Categories/>
        </div>
        
        <div>
            <Footer/>
        </div>
    
        
       
       
        
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue';
import Text from '@/components/Text.vue';
import Search from '@/components/Search.vue';
import CountryList from '@/components/CountryList.vue';
import CountryContent from '@/components/CountryContent.vue';
import Categories from '@/components/Categories.vue';
import Footer from '@/components/Footer.vue';


@Options({
    components: {
        Footer,
        Categories,
        CountryContent,
        CountryList,
        Header,
        Text,
        Search
    },
})
export default class App extends Vue {}
</script>

<style>

</style>
