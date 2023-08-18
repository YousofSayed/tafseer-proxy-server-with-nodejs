import express from 'express';

const app = express(), PORT = process.env.PORT || 7070;
const tafseerEndpoint = `http://api.quran-tafseer.com/tafseer`

app.get('/getTafseer/:id/:surah/:ahya/', async (req, res) => {
    try {
        const { id, surah, ahya } = req.params;
        const data = await (await fetch(`${tafseerEndpoint}/${id}/${surah}/${ahya}`, { method: 'GET' })).json()
        res.json(data);
    } catch (error) {
        res.status(404).json({ ok: false, code: 404, message: error.message })
    }
})


app.listen(PORT, () => { console.log(`App listent on port ${PORT}`) });