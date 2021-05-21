 var elem=document.querySelector('.notes');
// let clone=elem.cloneNode(true);
// console.log(clone.childNodes[1].children[0].)
// document.getElementById("real").appendChild(clone);
var flag=0;
if(localStorage.getItem("flag")==undefined){}
else{
    flag=localStorage.getItem("flag");
    console.log("total data : "+flag);
let  b =1;
while(b<=flag){
    let clone=elem.cloneNode(true);
    let boxes=document.getElementById("real").appendChild(clone);
    boxes.id="n"+b;
    boxes.childNodes[1].childNodes[1].innerText=JSON.parse(localStorage.getItem(b));
    boxes.childNodes[1].childNodes[1].id="delText"+b;
    boxes.childNodes[1].childNodes[3].id="del"+b;
    let str="redhand("+b+")";
   
    boxes.childNodes[1].childNodes[3].setAttribute('onclick',str);
   
    boxes.style.display="block";
    b=b+1;
}
}

function toWrite(){
    let write=document.getElementById("toWrite");
    if(write.value==""){
        alert("Nothing to Add");
    }
    else{
        let clone=elem.cloneNode(true);
   
    let boxes=document.getElementById("real").appendChild(clone);
    ++flag;
    boxes.id="n"+flag;
    boxes.childNodes[1].childNodes[1].innerText=write.value;
    boxes.childNodes[1].childNodes[1].id="delText"+flag;
    boxes.childNodes[1].childNodes[3].id="del"+flag;
    let str="redhand("+flag+")";
   
    boxes.childNodes[1].childNodes[3].setAttribute('onclick',str);
    boxes.style.display="block";
   localStorage.setItem(flag,JSON.stringify(boxes.childNodes[1].childNodes[1].innerText));
   localStorage.setItem("flag",flag);
  
    document.getElementById("toWrite").value="";
    }
   
}

let box=document.getElementById("go");
box.addEventListener('click',delAll);
let box2=document.getElementById("got");
box2.addEventListener('click',toWrite);

function redhand(post){
console.log("edit post: "+post+"   Total post:"+flag);


 let update=post+1;
// while(post<(flag-1)){

// update++;
// post++;

// }

if(post==flag){
    localStorage.removeItem(flag);
    location.reload();
    post=flag-1;
    localStorage.setItem("flag",post)
}
else{
    while(post<=(flag-1))
{
    let update=post+1;
    localStorage.setItem(post,localStorage.getItem(update));
   post= post+1;
}

    
    localStorage.removeItem(flag);
    flag=flag-1;
    localStorage.setItem("flag",flag);
    location.reload();
}

// let temp="n"+flag;
// console.log(temp);
// localStorage.removeItem(flag);
// flag=flag-1;
// console.log(document.getElementById("temp").style.display);
}

var wage = document.getElementById("toWrite");
wage.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        validate(e);
    }
});

function validate(e) {
   toWrite();
}




function delAll(){
    localStorage.clear();
    location.reload();
}