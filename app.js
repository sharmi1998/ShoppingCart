const Express=require('express')
var app=new Express();
app.set('view engine','ejs')
mobile=[
    {
        product:'smartphone',
        image:'/images/phone.jpg',
        name:'iphone xs max',
        description:'iPhone XS Max has our largest display on an iPhone ever',
        price:'1,24,800',
        feedback:'prime smartphone'
    },
    {
        product:'smartphone',
        image:"/images/vivo.jpg",
        name:'vivo v15',
        description:'vivo v15 is high end mid-range snmart phone',
        prcie:'19000/-',
        feedback:'budget smartphone'
    },
    {
        product:'smartphone',
        image:'/images/samsung.jpg',
        name:'samsung m30',
        description:'triple rear camera with 5000mAh battery',
        price:'14000/-',
        feedback:'budget smartphone'
    },{
        product:'smartphone',
        image:'/images/oppo.jpg',
        name:'oppo f11',
        description:'Newest smartphone to sport a pop-up selfie camera',
        price:'17000/-',
        feedback:'high quality camera smartphone'
    },{
        product:'smartphone',
        image:'/images/redmi.jpg',
        name:'redmi note 7 pro',
        description:'48 mp camera with 4000mAh battery',
        price:'14000/-',
        feedback:'high quality camera smartphone with longer battery'
    },{
        product:'smartphone',
        image:'/images/realme.jpg',
        name:'real me 3 pro',
        description:'25 mp AI camera with 4245 mAh battery',
        price:'13000/-',
        feedback:'high qulity camera &budget smartphone'
    }
];
dress=[
    {
        product:'western cloth',
        image:'/images/dress.jpg',
        name:'te-shirt',
        description:'black in color especially for gents',
        price:'1300/-',
        feedback:'no feedback'
    },{
        product:'party wear',
        image:'/images/re.jpg',
        name:'5 lehagas&salvarcombo',
        description:'designed for special oocations',
        price:'10000/-',
        feedback:'budget dress'
    },{
        product:'saree',
        image:'/images/saree.jpg',
        name:'hand made kanjipuram',
        description:'designed for special oocations',
        price:'1000/-',
        feedback:'good cloth'
    },{
        product:'shirt',
        image:'/images/shirt.jpg',
        name:'hand made kuthambulli',
        description:'designed for formal occations ',
        price:'1000/-',
        feedback:'good combo'
    }
];
furniture=[
    {
        product:'dinning table',
        image:'/images/table.jpg',
        name:'oasis',
        description:'designed with wooden finish ',
        price:'14000/-',
        feedback:'good'
    },{
        product:'bed',
        image:'/images/bed.jpg',
        name:'monarch',
        description:'double coat ',
        price:'14000/-',
        feedback:'good combo'
    },{
        product:'sofas',
        image:'/images/sofa.jpg',
        name:'drisya',
        description:'wooden finsh ',
        price:'18000/-',
        feedback:''
    },{
        product:'office-table',
        image:'/images/office.jpg',
        name:'rubco',
        description:'designed for offices&startUp ',
        price:'14000/-',
        feedback:'good combo'
    }
];
app.use(Express.static(__dirname+"/public"))
app.get('/',(req,res)=>{
    res.render('index',{title:'home'});
})
app.get('/signup',(req,res)=>{
    res.render('index1',{title:'login&signup'})
})
app.get('/buy',(req,res)=>{
    res.render('index2',{title:'mobiles'})
})
app.get('/single/:id',(req,res)=>{

    const x=req.params.id;
    res.render('single',{'mobile': mobile[x], title:"buy"} )

})
app.get('/dress',(req,res)=>{
    res.render('index3',{title:'fashion'})
})
app.get('/read/:id',(req,res)=>{

    const x=req.params.id;
    res.render('read',{'dress': dress[x], title:"fashion"} )
})
app.get('/furniture',(req,res)=>{
    res.render('index4',{title:'furniture'})
})
app.get('/read1/:id',(req,res)=>{

    const x=req.params.id;
    res.render('read1',{'furniture': furniture[x], title:"furniture"} )
})
app.listen(process.env.PORT || 3005,()=>{
    console.log("server is running on http://localhost:3005")
    })