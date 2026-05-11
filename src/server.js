const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });
const app = require('./app');

const DB = process.env.MONGO_URI;

// Połączenie z bazą danych na Atlasie
mongoose.connect(DB).then(() => {
  console.log('DB connection successfull!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}/`);
});
