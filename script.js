fetch ("https://api.sampleapis.com/beers/ale/?_limit=5").then((data)=>{
return data.json(); 
}).then((objectData)=>{
console.log(objectData[0]);
let tableData="";
objectData.map((value)=>{
tableData+= `<tr>
<td>${value.id}</td>
<td>${value.price}</td>
<td>${value.name}</td>
<td><img src="${value.image}"/></td>
</tr>`;
});
document.getElementById("table_body").
innerHTML=tableData;
}).catch((error)=>{
console.log(error);
})