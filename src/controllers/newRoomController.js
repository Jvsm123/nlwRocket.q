const Database = require( '../db/config' );

module.exports =
{
    async tratamento( req, res )
    {
        const db = await Database();
        const pass = req.body.password;

        let id;

        for(let i = 0; i < 6; i++ )
        {
            i == 0 ? id = Math.floor( Math.random() * 10 ).toString() :
            id += Math.floor( Math.random() * 10 ).toString();
        }

        await db.run( `INSERT INTO rooms ( 
            id, 
            pass 
        ) VALUES (
            ${parseInt( id )}, 
            ${pass}
        )`);

        await db.close();

        res.redirect(`/room/${id}`);
    }
}
