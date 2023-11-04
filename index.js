require('dotenv').config();
const express = require('express');
const { contactRoute } = require('./routes/contactRoutes')
const cors = require('cors')
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Ubah ini
app.use(express.static(__dirname));

// rute untuk contact
app.use("/", contactRoute )

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});