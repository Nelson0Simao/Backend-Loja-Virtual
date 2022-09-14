import createTableUsers from "../database/UsersTables.mjs";


class UserRepository{
    static async createUser(body){
        const newDataWasCreate = await createTableUsers.create(body);
        return newDataWasCreate;
        
    }
    static async findAllUser(){
        const listTotalUser = await createTableUsers.find()
        return {
            status:"User Create width success",
            content:listTotalUser
        };
    }
    static async findUserOfId(id){
        
    }
    static async deleteUser(id){
        
    }
    static async updateUser(body, id){

    }
    static async listUser(){
        
    }
}

export default UserRepository;  