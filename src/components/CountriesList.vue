<script setup>
import countries from '/public/countries.json';

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="border" v-for="country in countries" :key="country.alpha3Code">
                    <router-link :to="{ name: 'details', params: { code: country.alpha3Code }  }"
                        class="text-decoration-none text-reset">
                        <div>
                            <img
                                :src=" 'https://flagpedia.net/data/flags/icon/72x54/'+ country.alpha2Code.toLowerCase() + '.png' ">
                            <p>{{country.name.common}}</p>

                        </div>
                    </router-link>
                </div>
            </div>
            <div class="col">
                <router-view />
            </div>
        </div>
    </div>
</template>
<style>
.border:hover {
    background-color: #80a1df;
}
</style>