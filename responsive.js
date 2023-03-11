let arr = [
    {image:"images/shoe1.webp" , alt:"Abdur-Image",desc:"SPORTS"},
    {image:"images/shoe2.jpeg" , alt:"Ranjith-Image",desc:"MODERN"},
    {image:"images/shoe3.webp" , alt:"Kl-Image",desc:"CASUAL"},
    {image:"images/shoe4.webp" , alt:"Arun-Image",desc:"MODERN"},
    {image:"images/shoe5.webp" , alt:"Arunachalam-Image",desc:"FORMAL"},
    {image:"images/shoe6.jpeg" , alt:"Bhaargavi-Image",desc:"MODERN"},
    {image:"images/shoe7.jpeg" , alt:"Bhuvaneshwari-Image",desc:"SPORTS"},
    {image:"images/shoe8.jpeg" , alt:"Fasila-Image",desc:"MODERN"},
    {image:"images/shoe9.jpeg" , alt:"Ganesh-Image",desc:"CASUAL"},
    {image:"images/shoe10.jpeg" , alt:"Gopi-Image",desc:"FORMAL"},
];

const render =()=>{
    let show = "";
    for(let i =0;i<arr.length;i++){
       show += "<div class='image'><img src='"+arr[i].image+"' alt="+arr[i].alt+" onclick='display("+i+")'><h3>"+arr[i].desc+"</h3></div>";
    }
    document.getElementById("shoe-image").innerHTML=show;
}

const display = (id)=>{
    let displayImage = "<div class = 'display-image'><img src='"+arr[id].image+"' alt="+arr[id].alt+"><p class ='cross' onclick='cancel()'>❌</p></div>";
    document.getElementById("image-container").style.display = "flex";
    document.getElementById("image-container").innerHTML = displayImage;
}

const cancel = ()=>{
    document.getElementById("image-container").style.display = "none";
}

const menulist = ()=>{
    if(document.getElementById("nav-bar-menu").style.display=="flex"){
        document.getElementById("nav-bar-menu").style.display="none";
        
    }
    else{
        document.getElementById("nav-bar-menu").style.display="flex";
        document.getElementById("nav-bar-menu").style.flexDirection = "column";
    }
}