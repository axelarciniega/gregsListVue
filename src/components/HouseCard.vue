<template>



    <router-link :to="{name: 'House Details', params: {houseId: house.id}}">

        <div class="card elevation-5 my-3 house-card">
            <section class="row " >
            <div class="col-6">
                <img class="imgs" :src="house.imgUrl" :alt="house.creator.name">
            </div>
            <div class="col-6">
                <h3>
                    {{ house.year }} ${{ house.price }}
                </h3>
                <span>
                    Info: 
                    <div>
                        {{ house.bathrooms }} bathrooms,
                    </div>
                    <div>{{ house.bedrooms }} bedrooms,</div>

                     {{ house.levels }} levels
                </span>
                <span><h3>Description</h3></span>
                <div>
                    <h6>{{ house.description }}</h6>
                </div>

                <div>
                    <span>{{ house.creator.name }} <img class="profile-pic" :src="house.creator.picture" alt=""></span>
                </div>
                <div>
                    {{ house.createdAt}}
                </div>

            </div>

        </section>
    </div>
</router-link>

</template>


<script>
import { House } from '../models/House.js';


export default{
    props: {house: {type: House, required: true}},
    setup(){
        return{

        }
    }
}

</script>


<style lang="scss" scoped>

.house-card{

    .profile-pic{
        border-radius: 24%;
        height: 7vh;
    }
    
    cursor: pointer;
    &:hover{
        transition: all .1s ease;
        transform: scale(1.05);
    }
}

.imgs{
    height: 50vh;
    width: 50vh;
}

</style>