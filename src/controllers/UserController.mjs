import UserModel from "../models/UserModel.mjs";

class UserController{
    async createUser(req, res, next){
        try {
            const { userName, email, password } = req.body;
            const user = new UserModel(userName, email, password);
            const dataReturnUser = await user.addAllRepository();
            res.status(201).json(dataReturnUser);
        } catch (error) {
            next(error)
        }   
    }
    async listUser(req, res, next){
        try {
            const dataReturnUser = await UserModel.listAllUser();
            res.status(201).json(dataReturnUser.content);
        } catch (error) {
            next(error)
        }
    }
    async getUserOfId(req, res, next){

    }
    async deleteUser(req, res, next){

    }
    async updateUser(req, res, next){

    }
}

export default new UserController();