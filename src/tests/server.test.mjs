import assert from 'assert';
import connect from '../database/connect.mjs';
import UserRepository from '../repository/Users.mjs';


(async()=>{

})()
connect
describe("Servidor", ()=>{
    it('Should connected database', async()=>{
        const { connected } = await connect.then((sucess)=> sucess.connection.states)
        const statusConnectNumber = 1;
        assert.equal(connected, statusConnectNumber)
        // expect(connected).toBe(statusConnectNumber);
    })
    it('Should retorn name database', async()=>{
        const { name } = await connect.then((sucess)=> sucess.connection)
        //expect(name).toBe('ecommerce');
        assert.equal(name, 'ecommerce')
    })
    it('Should have driverInfo system Mongoose version: 6.5.2', async ()=>{
        const { _connectionOptions } = await connect.then((sucess)=> sucess.connection)
        const ResponseDriveDefault = JSON.stringify({"driverInfo":{"name":"Mongoose","version":"6.5.2"}});
        const convertDriverString = JSON.stringify(_connectionOptions)
        assert.equal(convertDriverString, ResponseDriveDefault)
        //expect(convertDriverString).toEqual(ResponseDriveDefault);
    })
    it('Should hava database create users', async ()=>{
        const dataCreateUser = {
            "userName":"Madara Uchia",
            "email":"madarauchia@gconoa.com",
            "password":"dor"
        };
        const dataResponseToCreateUser = {
            "userName": "Madara Uchia",
            "email": "madarauchia@gconoa.com"
        }
        const { userName, email} = await UserRepository.createUser(dataCreateUser);
        const getDataSendRepository = JSON.stringify({userName, email})
        const getDataTestRepository = JSON.stringify(dataResponseToCreateUser)
        assert.equal(getDataSendRepository,getDataTestRepository)

    })
    it('Should hava database lists users', async ()=>{
        const testTotalUser = await UserRepository.findAllUser();
        const restornListUserPatter = testTotalUser.content.length > 0 && typeof testTotalUser.content === 'object'
        assert.equal(restornListUserPatter,true)

    })
})