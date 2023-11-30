import mongoose, { Model, Schema } from "mongoose";
import { IProductBackend } from '../interfaces/product';

Schema.Types.String.checkRequired((v: any) => v != null); // This is for the unique validation

const ProductSchema = new Schema({
    name:{
        type: String,
        // unique: true,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        default: 'chance',
        enum: ['chance', 'doblechance', 'baloto', 'miloto', 'loteria', 'giros'],
    },
    percentageC: {
        type: Number,
        default: 0,
    },
    image:{
        type: String,
        default: ""
    },
},
{
    timestamps: true,
    // autoIndex: true,
    // versionKey: false,
    // id: false,
}
);

ProductSchema.set('toJSON', {
    transform: function(doc, ret, options) {
        delete ret.__v;
        return ret;
    }
})

const ProductModel:Model<IProductBackend> = mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default ProductModel;