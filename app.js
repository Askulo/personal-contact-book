const express = require("express")
const mongoose = require('mongoose')
const app = express();
const dotenv = require('dotenv').config()


app.use(express.json());

mongoose.connect(process.env.URL ,{
    
}).then(()=> console.log('connected MonongoDB'))
.catch((error)=> console.error('MongoDB connectione error:', error));

// Import contact routes
const contactRoutes = require('./routes/Contacts');
app.use('/contacts', contactRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
