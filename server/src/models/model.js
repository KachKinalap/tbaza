import mongoose from 'mongoose'

const picTitleCaptionDateScheme = new mongoose.Schema({
    pic: {
        required: false,
        type: String
    },
    title: {
        required: false,
        type: String
    },
    caption: {
        required: false,
        type: String
    },
    date: {
        required: false,
        type: Date
    }
})

const titleListScheme = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    list: {
        required: true,
        type: Array
    }
})

const detailScheme = new mongoose.Schema({
    mainPic: {
        required: false,
        type: String
    },
    title: {
        required: false,
        type: String
    },
    text: {
        required: false,
        type: String
    },
    gallery: {
        required: false,
        type: Array
    }
})

const priceItem = new mongoose.Schema({
    title: {
        required: false,
        type: String
    },
    price: {
        required: false,
        type: Number
    },
    afterword: {
        required: false,
        type: String
    },
    additionalServices: {
        name: {
            required: false,
            type: String
        },
        items: {
            required: false,
            type: Array
        }

    }
})

const Model = {
    picTitleCaptionDateScheme: mongoose.model('picTitleCaptionDateModel', picTitleCaptionDateScheme),
    titleListScheme: mongoose.model('titleListScheme', titleListScheme),
    detailScheme: mongoose.model('detailScheme', detailScheme),
    priceItem: mongoose.model('priceItem', priceItem)
}


export default Model
