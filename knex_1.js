// const option = {
//     client: "mysql",
//     connection: {
//         host: "127.0.0.1",
//         user: "root",
//         password: "Pink@123",
//         database: "subjectdb"

//     }
// }
// const knex = require("knex")(option);
// knex.schema.createTable('Listofsubject', (table) => {
//     table.increments('id')
//     table.string('name_of_subject')
//     table.integer('price')
// })
//     .then(() => console.log("created"))
//     .catch((err) => { console.log(err); throw err })
//     .finally(() => {
//         knex.destroy();
//     })


// insert data    

const option = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Pink@123',
        database: 'subjectdb'
    }
}
const knex = require("knex")(option);
const Listofsubject = [{ name_of_subject: 'biology', price: 240 },
{ name_of_subject: 'mathemtaics', price: 500 },
{ name_of_subject: 'politic science', price: 400 },
{ name_of_subject: 'Physics', price: 800 },
{ name_of_subject: 'chemistry', price: 330 },
{ name_of_subject: 'computerscience', price: 640 },
{ name_of_subject: 'zology', price: 540 },
{ name_of_subject: 'quantum physics', price: 940 }
]
knex('Listofsubject').insert(Listofsubject).then(()=>console.log("inserted"))
.catch((err)=>{console.log(err); throw err})
.finally(()=>{
    knex.destroy();
})
