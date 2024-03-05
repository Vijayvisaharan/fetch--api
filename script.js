var res = fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json()).then((data1)=>bar(data1))

var container=document.createElement("div");
container.className="container"
var row=document.createElement("div");
row.className="row"
//var button=document.createElement("button")
//button.setAttribute("type","button")
//button.innerHTML="click for weather"
//button.addEventListener("click",data1[i].latlong)


function bar(data1){
  console.log(data1)
  
  for(var i =0;i<data1.length;i++){
   
    var col=document.createElement("div");
    col.className="col-md-4"
    col.innerHTML=`<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header ">${data1[i].name.common}</div>
    <div class="card-body">
    <img src="${data1[i].flags.svg}" class="card-img-top" alt="Card image cap"> 
      <p class="card-text">Capital:${data1[i].capital}</p>
      <p class="card-text">Region:${data1[i].region}</p>
      <p class="card-text">Country Code:${data1[i].cioc}</p>
      <a href="#" class="btn btn-primary">click for weather </a>
      <a href ="final_res" target="foo(...temp)" 

      </div>
  </div>`
  
var temp=data1[i].latlng;
foo(...temp)
    row.append(col)
    container.append(row)
    document.body.append(container);
   
  }
  }
  function foo(lat,lon){
    var final_res = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f59b2444efbb6754f596027d28ac10d7`)
  
  .then((data2)=>data2.json()).then((data3)=>console.log(data3.weather))
  }
 