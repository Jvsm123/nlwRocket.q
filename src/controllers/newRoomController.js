const Database = require( '../db/config' );

module.exports =
{
    async tratamento( req, res )
    {
        const db = await Database();
        const pass = req.body.password;

        let id;
        let isRoom = true;

        while( isRoom )
        {
            //Gera numero da sala!
            for(let i = 0; i < 6; i++ )
            {
                i == 0 ? id = Math.floor( Math.random() * 10 ).toString() :
                id += Math.floor( Math.random() * 10 ).toString();
            }

            //Verifica o número para ver se está no banco
            const roomIdsExists = await db.all(`SELECT id FROM rooms`);

            isRoom = roomIdsExists.some( ids => ids === id )

            if( !isRoom )
            {
                //Insere sala no banco
                await db.run( `INSERT INTO rooms (
                    id,
                    pass
                ) VALUES (
                    ${parseInt( id )},
                    ${pass}
                )`);
            }
        }

        await db.close();

        res.redirect(`/room/${id}`);
    },

    async open( req, res )
    {
        const roomId = req.params.id;

        const db = await Database();
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`);
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`);

        let isNoQuestions = true;

        if( questions.length > 0 || questionsRead > 0 )
            isNoQuestions = false;

        res.render( 'room',
        {
            Id: roomId,
            questions: questions,
            questionsRead: questionsRead,
            isNoQuestions: isNoQuestions
        });
    },

    enter( req, res )
    {
        const roomId = req.body.id;

        res.redirect(`/room/${roomId}`);
    }
}
