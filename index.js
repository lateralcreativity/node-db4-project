const server = require('./api/server');
const PORT = process.env.PORT || 3000;

server.get('/', (req, res) => {
    res.status(200).json({ message: 'API IS UP' });
});

server.listen(PORT, console.log(`Server running at port ${PORT}`));