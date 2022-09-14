import UserRepository from "../repository/Users.mjs";

class UserModel{
    constructor(name, email = false, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
    async addAllRepository(){
        const data = {
            userName: String(this.name).trim(),
            email: String(this.email).trim(),
            password: String(this.password).trim()
        }
        console.log(data)
        return await UserRepository.createUser(data);
    }
    static async listAllUser(){
        return await UserRepository.findAllUser();
    }
}

export default UserModel;