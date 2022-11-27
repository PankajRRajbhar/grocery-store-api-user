const db=require('../config/db');
const startApp =require('./app');

module.exports=()=>{
    db.connect().asPromise().then((connection)=>{

        if (connection){
            startApp().catch(err=>{
                console.error("Error!\n",err.message);
                connection.close();
            })
        }
    }).catch(err=>{
        console.log('Problem in starting the server.\n',err);
    })
}