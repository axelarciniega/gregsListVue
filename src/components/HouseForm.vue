<template>
    <form @submit.prevent="createHouse">
        <section class="row">

            <div class="col-2">
                <label for="Price">Price</label>
                <input required v-model="houseData.price" class="form-control" placeholder="Price" type="number">
            </div>
            <div class="col-2">
                <label for="year">Year</label>
                <input required v-model="houseData.year" class="form-control" placeholder="Year" type="number">
            </div>
            <div class="col-2">
                <label for="Bedrooms">Bedrooms</label>
                <input required v-model="houseData.bedrooms" class="form-control" placeholder="Bedrooms" type="number">
            </div>
            <div class="col-2">
                <label for="Bathrooms">Bathrooms</label>
                <input required v-model="houseData.bathrooms" class="form-control" placeholder="Bathrooms" type="number">
            </div>
            <div class="col-2">
                <label for="Levels">Levels</label>
                <input required v-model="houseData.levels" class="form-control" placeholder="Levels" type="number">
            </div>
            <div class="col-2">
                <label for="Image">Image</label>
                <input required v-model="houseData.imgUrl" class="form-control" placeholder="Image" type="url">
            </div>
            <div class="col-5">
                <label for="Description">Description</label>
                <input required v-model="houseData.description" class="form-control" placeholder="Description" type="text">
            </div>
            <div class="mt-2 d-flex justify-content-end">
                <button class=" btn btn-success rounded-pill"> Submit House</button>

            </div>
        </section>
    </form>
</template>


<script>
import { ref } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';

    

    export default{
        setup(){
            const houseData = ref({})
            return{
                houseData,
                async createHouse(){
                    try {
                        logger.log('creating a house', houseData.value)
                        const newHouse = await housesService.createHouse(houseData.value)
                        Pop.toast('House Created 🏚️', "success")
                    } catch (error) {
                        Pop.error(error)
                    }
                }
            }
        }
    }




</script>


<style lang="scss" scoped>

</style>