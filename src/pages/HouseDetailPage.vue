<template>
    House
    {{ activeHouse}}
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

</style>