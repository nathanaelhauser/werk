module.exports = (model, Schema) =>{
    const Users = new Schema ({
        user: {
            firstname: String,
            lastname: String,
            age: String},

    })
}