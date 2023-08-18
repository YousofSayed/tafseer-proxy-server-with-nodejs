import express from 'express';
import cors from 'cors';
const app = express(), PORT = process.env.PORT || 7070;
const tafseerEndpoint = `http://api.quran-tafseer.com/tafseer`


const allowedOrigins = ['https://localhost:5173', 'https://rowaq.pages.dev'];
app.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.get('/getTafseer/:id/:surah/:ahya', async (req, res) => {
    try {
        const { id, surah, ahya } = req.params;
        const data = await (await fetch(`${tafseerEndpoint}/${id}/${surah}/${ahya}`, { method: 'GET' })).json()
        res.json(data);
    } catch (error) {
        res.status(404).json({ ok: false, code: 404, message: error.message })
    }
})

app.listen(PORT, () => { console.log(`App listent on port ${PORT} with upd6`) });
