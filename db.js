const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function(){

        // Criando Uma Tabela.
        db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT 
        );        
    `)

        /*
        // Inserindo DADOS
        const query = `
        INSERT INTO ideas(
            image, 
            title,
            category,
            description,
            link
        ) VALUES (?,?,?,?,?);
            
    `
        const values = [
            "https://image.flaticon.com/icons/svg/2729/2729007.svg",
            "Cursos de Programação",
            "Estudo",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque sequi, quas praesentium magni, ratione nemo illum atque veritatis, blanditiis quam architecto optio sed eligendi! Nesciunt possimus sapiente totam dicta itaque?",
            "https://rockteseat.com.br"
    ]

        db.run(query,values,function(err){

            if (err) return console.log(err)

            console.log(this)

        })
        */

        /* Deletando Dados na tabela

        db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err){
            if (err) return console.log(err)

            console.log("DELETEI", this)
        })
        */
        

        /*
        //Consultar dados na tabela
        db.all(`SELECT * FROM ideas`, function(err, rows ){
            
            if (err) return console.log(err)

            console.log(rows)
        })
 
    */
})

module.exports = db