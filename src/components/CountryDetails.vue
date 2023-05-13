<script setup>

import countries from '/public/countries.json';

/*import { useRoute } from 'vue-router';

const route = useRoute();  
const code = route.params.code; 
*/

</script>
<template>
    <div class="row">
        <div v-for="country in countries" :key="country.alpha3Code">
            <div v-if="$route.params.code === country.alpha3Code">
                <img :src=" 'https://flagpedia.net/data/flags/icon/72x54/'+ country.alpha2Code.toLowerCase() + '.png' ">
                <h1>{{country.name.common}}</h1>
                <hr>
                <p>Capital
                    <span v-for="cap in country.capital"> - {{cap}}</span>
                </p>
                <hr>
                <p>Area
                    <span>{{country.area}} km<sup>2</sup></span>
                </p>
                <hr>
                <p>Borders</p>
                <div v-for="border in country.borders">
                    <div v-for="country2 in countries" :key="country.alpha3Code">
                        <li v-if="border === country2.alpha3Code">
                            <router-link :to="{ name: 'details', params: { code: country2.alpha3Code }  }">
                                {{country2.name.common}}
                            </router-link>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style>
    span{
        margin-left: 20px;
    }
</style>