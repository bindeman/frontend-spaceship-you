const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//const LayerSchema = require('Layer');

// const LayerSchema = new Schema({

//     name: {
//         type: String,
//         //required: false
//     },
//     id: {
//         type: Number,
//         //required: true
//     },
//     type: {
//         type: String,
//         //required: true
//     },
//     activation: {
//         type: String,
//         //required: true
//     },
//     width: {
//         type: Number,
//         //required: true
//     }

// });

// Create Schema
const NetworkSchema = new Schema({

    name: {
        type: String,
        required: false,
        default: "Untitled"
    },
    data: [{
    
        type: Number
    }]
});

module.exports = Network = mongoose.model('network', NetworkSchema);

