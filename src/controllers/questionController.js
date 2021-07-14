const DB = require( '../db/config' );

module.exports =
{
    async tratamento( req, res )
    {
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const password = req.body.password;

        //Verificar se a senha está correta
        const db = await DB();

        const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`);

        if( verifyRoom.pass === password )
        {
            action === 'delete'
                ? await db.run(`DELETE FROM questions WHERE id = ${questionId}`)
                : await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId} `)

            res.redirect(`/room/${roomId}`);
        }
        else
        {
            res.render('passincorrect', {roomId: roomId});
        }
    },

    async criar( req, res )
    {
        const db = await DB();

        const question = req.body.question;
        const roomId = req.params.room;

        await db.run(`INSERT INTO questions
        (
            title,
            read,
            room
        ) VALUES (
            "${question}",
            0,
            ${parseInt( roomId )}
        )`);

        res.redirect( `/room/${roomId}` );
    }
}
