const {MongoClient}=require('mongodb')
//const url='mongodb://0.0.0.0:27017'
//const client=new MongoClient(url)
const client=new MongoClient('mongodb+srv://tcollegewala30:fOcy87YhffoTWgnJ@cluster0.qqtdpgf.mongodb.net/b.net/')
async function connection(){
    var result=await client.connect()
    var db=result.db('Bags')
    return db
}
module.exports=connection()