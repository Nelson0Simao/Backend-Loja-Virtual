import executeQuery from "./executeQuery.js";

class ProductsTable{
    static async init(){
        await this.createTableProducts();
    }
    static async createTableProducts(){
        const Schema = new mongoose.Schema({
            productName: {
                type:String,
                required: true
            },
            productDescription: {
                type: String,
                required: true
            },
            productPrice: {
                type: Number,
                required: true
            },
            productQuantity: {
                type: Number,
                required: true
            },
            productImage: {
                type: String,
                required: false
            },
            userName: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            }
        })
        
        return executeQuery("Product", Schema);
    }
}
export default new ProductsTable();
