class Data{
  constructor(id,name,price,image,category,delivery,rating)
  {
      this.id=id
      this.name=name
      this.price=price
      this.image=image 
      this.category=category 
      this.delivery=delivery
      this.rating=rating
  }
}
let item1= new Data(1,"Noise Twist Bluetooth  Smart Watch ",2999,"https://i.ibb.co/hVGTJww/img1.jpg","Watch","Fast delivery",5)
let item2=new Data(2,"Fire-Boltt Dagger Luxe Smartwatch",1999,"https://i.ibb.co/HTKwcrM/image2.jpg","Watch","2-3 days delivery",3)
let item3= new Data(3,"TITAN Mens Analog Watch",2599,"https://i.ibb.co/JpgkLHc/imag22.webp","Watch","Fast delivery",4)
let item4=new Data(4,"Rado Captain Cook 300m Watch",4999,"https://i.ibb.co/fpQJ1VX/image3.jpg","Watch","2-3 days delivery",3) 
let item5= new Data(5,"Solid Colour Collar Slim Fit Shirt",899,"https://i.ibb.co/V34wx5c/image6.jpg","Mens","2-3 days delivery",4)
let item6=new Data(6," Men Regular Mid Rise Dark Blue Jeans",999,"https://i.ibb.co/DG3ggs9/image7.jpg","Mens","Fast delivery",5)
let item7= new Data(7,"Jack & Jones Slim Mens T-shirt",599,"https://i.ibb.co/0sr0W6N/image5.jpg","Mens","2-3 days delivery",5)
let item8=new Data(8,"Miraan Men Solid Casual Shirt",1399,"https://i.ibb.co/2h2Gryd/image8.jpg","Mens","2-3 days delivery",4) 
let item9= new Data(9,"ASIAN Men's Sports Running Shoes",1359,"https://i.ibb.co/W5Qbv3d/image9.jpg","Footwear","Fast delivery",5)
let item10=new Data(10,"ASIAN Men's Casual White Sneaker ",3589,"https://i.ibb.co/0X5CzTB/image10.jpg","Footwear","2-3 days delivery",3)
let item11= new Data(11,"Sparx mens Ss-453 Blue Grey Sandal",1299,"https://i.ibb.co/nrvfKcm/image12.jpg","Footwear","7-8 days delivery",5)
let item12=new Data(12,"Puma Black-White Slide",799,"https://i.ibb.co/0BMdwJv/image11.jpg","Footwear","Fast delivery","2-3 days delivery",5) 
let item13=new Data(13,"Kids Sleeveless T Shirts and Shorts Set ",699,"https://i.ibb.co/cT8NQDk/kids.jpg","Kids Wear","2-3 days delivery") 
let item14= new Data(14,"Full Sleeves Printed Sweatshirt with Pant",899,"https://i.ibb.co/6ndB1Gw/kids1.jpg","Kids Wear","Fast delivery",3)
let item15=new Data(15,"KYDA KIDS® Boy's Cotton Track Pant ",989,"https://i.ibb.co/wKTcPzQ/kids3.jpg","Kids Wear","2-3 days delivery",5)
let item16= new Data(16," Boy's Cotton T-Shirt With Shorts",499,"https://i.ibb.co/TkC3pkV/kidss.jpg","Kids Wear","7-8 days delivery",4)
let item17=new Data(17,"Nena Fashion Girl Above the Knee Length Dress",999,"https://i.ibb.co/K5k0gMc/kids5.jpg","Girl's wear","Fast delivery",3) 
let item18= new Data(18,"Puff Sleeve Boat Neck Dress",499,"https://i.ibb.co/XZM298r/girlwear.jpg","Girl's wear","Fast delivery",4)
let item19=new Data(19,"BENKILS Girls Casual Dress ",689,"https://i.ibb.co/jvqWMjY/g1.jpg","Girl's wear","2-3 days delivery",2)
let item20= new Data(20,"Jam & Honey Girl's Cotton Empire Waist Knee-Length Dress",799,"https://i.ibb.co/17GFd4H/g2.jpg","Girl's wear","7-8 days delivery",5)
let item21= new Data(21,"Samsung Galaxy M04 Light Green, 4GB RAM, 64GB Storage ",12299,"https://i.ibb.co/fvbkrbn/m3.jpg","Mobile","7-8 days delivery",5)
let item22=new Data(22,"Redmi A2 (Sea Green, 2GB RAM, 32GB Storage)",8899,"https://i.ibb.co/GsrCsCF/m2.jpg","Mobile","2-3 days delivery",3) 
let item23=new Data(23,"OnePlus Nord 3 5G (Tempest Gray, 16GB RAM, 256GB Storage) ",19599,"https://i.ibb.co/KLgN1Hp/m33.jpg","Mobile","2-3 days delivery",5) 
let item24= new Data(24,"Apple iPhone 14 Pro (128 GB)  Silver",79999,"https://i.ibb.co/wKmwqGV/m4.jpg","Mobile","Fast delivery",3)
let item25= new Data(25," STRABO Moto Laptop Bag School & College Backpacks- 25L Water Resistant",1199,"https://i.ibb.co/z2FrH69/bag22.jpg","Bag","7-8 days delivery",3)
let item26=new Data(26,"Nena Fashion Girl Above the Knee Length Dress",999,"https://i.ibb.co/k4CrggJ/b1.jpg","Bag","Fast delivery",5) 
let item27= new Data(27,"Puff Sleeve Boat Neck Dress",499,"https://i.ibb.co/7yyxf7k/b2.jpg","Bag","Fast delivery",4)
let item28=new Data(28,"Leather World 27 Cm Tan Vegan travel Bag ",1189,"https://i.ibb.co/M803wxr/bag5.jpg","Bag","2-3 days delivery",3)

let productsss=[item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13,item14,item15,item16,item17,item18,item19,item20,item21,item22,item23,item24,item25,item26,item27,item28]

function display(productsss) {
  let helloo = document.getElementById("helloo");
  helloo.innerHTML = "";
  productsss.map((p, i) => {
    let divv = document.createElement("div");
    let ratingss = '';
    for (let i = 0; i < 5; i++) {
      ratingss+= '<i class="fa fa-star text-warning"></i>';
    }
    for (let i = p.rating; i < 5; i++) {
      ratingss += '<i class="fa fa-star"></i>';
    }

divv.innerHTML= `
      <div>
         <div>
          <div class="card" style="width: 18rem ;">
               <img src="${p.image}" class="card-img-top img-fluid">
              <div class="card-body">
                 <p class="text-center text-dark fw-bold">${p.category}</p>
                 <P class="card-title">${p.name}</P>
                 <div class="ps-2 pb-2"> ${ratingss}</div>
                  <p class="fs-4  ms-4"> &#8377 ${p.price} </p>
                 <span class="ms-5">${p.delivery}</span>
                 <div class="ms-5 mt-2"><button type="button"  class="btn btn-success  ms-5" onclick="addtocart(${i})">Add</button></div>
               </div>
            </div>
        </div>
      </div>`;

    helloo.appendChild(divv);

  });
}

let srr=document.getElementById("search")
srr.addEventListener("keyup",()=>{
let search=srr.value.toLowerCase()
let searchpr=productsss.filter((i)=>i.name.toLowerCase().includes(search))
 display(searchpr)
})

let a=document.getElementsByClassName("px-5")
for(let i=0;i<a.length;i++)
{
a[0].addEventListener("click",()=>{
let sr=productsss.filter((i)=>i.category.includes("Mens"))
display(sr)
})
a[1].addEventListener("click",()=>{
let sr=productsss.filter((i)=>i.category.includes("Watch"))
display(sr)
})
a[2].addEventListener("click",()=>{
let sr=productsss.filter((i)=>i.category.includes("Footwear"))
display(sr)
})
a[3].addEventListener("click",()=>{
let sr=productsss.filter((i)=>i.category.includes("Kids Wear"))
display(sr)
})
a[4].addEventListener("click",()=>{
let sr=productsss.filter((i)=>i.category.includes("Girl's wear"))
display(sr)
})
a[5].addEventListener("click",()=>{
let sr=productsss.filter((i)=>i.category.includes("Mobile"))
display(sr)
})
a[6].addEventListener("click",()=>{
let sr=productsss.filter((i)=>i.category.includes("Bag"))
display(sr)
})
a[7].addEventListener("click",()=>{
let sr=productsss.filter((i)=>i.delivery.includes("Fast delivery"))
display(sr)
})

}

let b=document.getElementsByClassName("checkk")[0]
b.addEventListener("click",()=>{
if(b.checked)
{
let sr=productsss.filter((i)=>i.price<1000)
display(sr)
}

})
let c=document.getElementsByClassName("checkk")[1]
c.addEventListener("click",()=>{
if(c.checked)
{
let sr=productsss.filter((i)=>i.price>1000 && i.price<5000)
display(sr)
}

})
let d=document.getElementsByClassName("checkk")[2]
d.addEventListener("click",()=>{
if(d.checked)
{
let sr=productsss.filter((i)=>i.price>5000 && i.price<15000)
display(sr)
}

})
let e=document.getElementsByClassName("checkk")[3]
e.addEventListener("click",()=>{
if(e.checked)
{
let sr=productsss.filter((i)=>i.price>15000 && i.price<99000)
display(sr) 
}

})

let f=document.getElementsByClassName("checkk")[4]
f.addEventListener("click",()=>{
if(f.checked)
{
let sr=productsss.sort((a,b)=>a.price-b.price)
display(sr)
}

})
let g=document.getElementsByClassName("checkk")[5]
g.addEventListener("click",()=>{
if(g.checked)
{
let sr=productsss.sort((a,b)=>b.price-a.price)
display(sr)
}

})
let k=document.getElementsByClassName("checkk")[6]
k.addEventListener("click",()=>{
if(k.checked)
{
let sr=productsss.sort((a,b)=>a.name.localeCompare(b.name))
display(sr)
}

})
let r=document.getElementsByClassName("checkk")[7]
r.addEventListener("click",()=>{
if(r.checked)
{
let sr=productsss.sort((a,b)=>b.name.localeCompare(a.name))
display(sr)
}
})
let s=document.getElementsByClassName("checkk")[8]
s.addEventListener("click",()=>{
  if(s.checked)
  {
    let sr=productsss.filter((i)=>i.rating===5)
    display(sr)
  }
 
})
let u=document.getElementsByClassName("checkk")[9]
u.addEventListener("click",()=>{
  if(u.checked)
  {
    let sr=productsss.filter((i)=>i.rating===4)
    display(sr)
  }
 })
let v=document.getElementsByClassName("checkk")[10]
v.addEventListener("click",()=>{
  if(v.checked)
  {
    let sr=productsss.filter((i)=>i.rating===3)
    display(sr)
  }
})

let x=document.getElementsByClassName("checkk")[11]
x.addEventListener("click",()=>{
  if(x.checked)
  {
    let sr=productsss.filter((i)=>i.rating===2)
    display(sr)
  }
})


display(productsss)
let nn=  document.getElementById("emptyyy")
document.getElementById("displayblock").addEventListener("click",()=>(nn.style.display==="none")? nn.style.display="block":nn.style.display="none")


let cart= JSON.parse(localStorage.getItem("itemsss"))?? []
function addtocart(ind) {
let pr= productsss.find((pr,i) =>i === ind);
if (pr) {
   cart.push(pr);
   localStorage.setItem("itemsss",JSON.stringify(cart))
   updatecart();
}
}

function updatecart() {
let empty = document.getElementById("emptyyy");
empty.innerHTML = "";
let cart= JSON.parse(localStorage.getItem("itemsss"))?? []
cart.map((item ,i)=> {
  let divv = document.createElement("div");
  divv.innerHTML = `<table class="table w-100">
  <tbody>
    <tr><td><img src="${item.image}" height=50 width=50></td>
    <td><p style="font-size:13px;">${item.name}</p></td>
    <td class="fs-6">&#8377 ${item.price}</td>
   <td><i class="fa-solid fa-trash text-danger" onclick="deletei(${i})"></i></td>
  </tr></tbody></table>`;
  empty.appendChild(divv);
 
});
let total=cart.reduce((a,b)=>a+b.price,0)
document.getElementById("omkar").innerHTML=cart.length
document.getElementsByClassName("xyz")[0].innerHTML=total
}

function deletei(ind)
{
let  cart= JSON.parse(localStorage.getItem("itemsss"))?? []
cart=cart.filter((p,i)=>i!==ind)
localStorage.setItem("itemsss",JSON.stringify(cart))
updatecart()
}
updatecart()
