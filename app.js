const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDb',{useNewUrlParser:true});

const fruitsSchema=new mongoose.Schema ({
    name:{
        type:String,
        required:[true,"No name specified"]
    },
    rating:{
        type:Number,
        min:1,
        max:10

    },
    price:Number,
    review:String
});

const Fruit=mongoose.model("Fruit",fruitsSchema)

const fruit=new Fruit({
    
    rating:10,
    price:50,
    review:"This is the best peach ever"
});



// Fruit.updateOne({_id:  "63c23504cef6032959d055f0"},{name:"Peach"},(err)=>{
//     if(err){
//         console.log("There is an error");

//     }
//     else{
//         console.log('Successfully enetered the item into the database!1');
//     }
// })

// Fruit.deleteOne({rating:10});










// const peopleSchema=new mongoose.Schema({
//     name:String,
//     review:String,

// });

// const People=mongoose.model('People',peopleSchema);

// const name=new People({
//     name:"Ravi Kumar",
//     review:'I love apples'
// });

// const kiwi=new Fruit({
//     name:"Kiwi",
//     price:30,
//     review:"The best fruit evar but a bit sour"
// });
// const banana=new Fruit({
//     name:"banana",
//     price:30,
//     review:"The best fruit evar but a bit sour"
// });
// const melon=new Fruit({
//     name:"melon",
//     price:30,
//     review:"The best fruit evar but a bit sour"
// });

// // Fruit.insertMany([kiwi,banana,melon],(err)=>{
// //     if(err){
// //         console.log(err);

// //     }
// //     else{
// //         console.log('Successfully saved the items to database')
// //     }
// // })

// Fruit.find((err,fruits)=>{
//     if(err){
//         console.log("There is an error!!");
//     }
//     else{
//             mongoose.connection.close();
//             fruits.forEach((fruit)=>{
//             console.log(fruit.name)
//         })
//     }
// })
mongoose.connection.close();








