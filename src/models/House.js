export class House{
    constructor(data){
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.year = data.year
        this.imgUrl = data.imgUrl
        this.price = data.price
        this.description = data.description
        this.creatorId = new Date(data.creatorId)
        this.creator = data.creator
        this.levels = data.levels
        this.createdAt = data.createdAt

    }
}