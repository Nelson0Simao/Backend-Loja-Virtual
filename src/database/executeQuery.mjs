import mongoose from "mongoose"

function executeQuery(tableName, Schema = ""){
    return mongoose.model(tableName, Schema)
}

export default executeQuery;


