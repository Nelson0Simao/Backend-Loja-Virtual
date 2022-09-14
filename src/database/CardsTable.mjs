import executeQuery from "./executeQuery.mjs";

class CardsTable{
    static async init(){
        await this.createTableCards();
    }
    static async createTableCards(){
        const Schema = new mongoose.Schema({
            products: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            }],
            userName: {
                type: mongoose.Schema.Types.ObjectId,
                required: 'User'
            },
            adress: {
                street: {
                    type: String,
                    required: true
                },
                number: {
                    type: String,
                    required: true
                },
                city: {
                    type: String,
                    required: true
                }
            },
            payment: {
                card: {
                    number: {
                        type: String
                    },
                    cvc: {
                        type: String
                    }
                }
            }
        })
        return executeQuery("Card", Schema);
    }
}

export default new CardsTable();