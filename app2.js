const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/personDb',{useNewUrlParser:true});

const fruitsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'No name specified']
    },
    rating:{
        type:Number,
        min:1,
        max:10,
    },
    price:Number,
    review:String

});

const Fruit=mongoose.model('Fruit',fruitsSchema);

const personSchema=new mongoose.Schema({
    favfruit:fruitsSchema,
    name:String,
    age:Number
});

const kiwi=new Fruit({
    name:"Kiwi",
    rating:10,
    price:100,


});
// kiwi.save();

const People=mongoose.model('Person',personSchema);

const john=new People({
    
    name:"John",
    age:21
})
john.save();

mongoose.connection.close();



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