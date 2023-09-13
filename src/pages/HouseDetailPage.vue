<template>
   
    <section class="row">
        <div class="col-12 d-flex justify-content-center">
            <img class="active-img" :src="activeHouse.imgUrl" alt="">
        </div>
        <div class="col-6">
            <h1> ${{ activeHouse.price }}</h1>
            <h3> Year: {{ activeHouse.year }}</h3>
        </div>
        <div class="col-6">
            <h1>info:</h1>
            <span>{{ activeHouse.bathrooms }} bathrooms, {{ activeHouse.bedrooms }} bedrooms, {{ activeHouse.levels }} levels</span>
            <div>
                <h1>Description</h1>
            </div>
            <div>
                <i>{{ activeHouse.description }}</i>
            </div>
        </div>
        <div class="col-12 d-flex justify-content-center mt-5"> {{ activeHouse.creator.name }} <img class="profile-pic" :src="activeHouse.creator.picture" alt=""></div>
    </section>
</template>


<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';


export default{
    setup(){

        const route = useRoute()

        onMounted(() => {
            getHouseById()
        })
        async function getHouseById(){
            try {
                const houseId = route.params.houseId
                await housesService.getHouseById(houseId)
            } catch (error) {
                Pop.error(error)
            }
        }
        return{
            activeHouse: computed(() => AppState.activeHouse)
        }
    }
}





</script>




<style lang="scss" scoped>

 .profile-pic{
        border-radius: 24%;
        height: 7vh;
    }

.active-img{
    width: 60vh;
    height: 60vh;
}


</style>