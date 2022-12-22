const pagenumber = document.querySelector("#pagenumber");
const content = document.querySelector("#tbody");

let aldata = []




const api_URL='https://gist.githubusercontent.com/techieeycamp/85884f4327effa2cb7677d3d15964104/raw/465fda01beaeff7170aae3327c4c61e1a09bc16d'

async function getapi(url){
    const res = await fetch(url);
     const data = await res.json();
      aldata = data;
      getpagenumber();
        
}
getapi(api_URL);

    function getpagenumber(){
        let pageno = 0; 
        let pages = aldata.length / 10;
        for (let i= 0 ; i < pages; i++){

                let button = document.createElement("button");
                button.innerHTML=`${i+1}`;
                button.onclick = ()=>{
                    pageno = i;
                    getcontentnext(pageno);
                };  
                getcontentfirst(pageno);
                pagenumber.append(button);
        }
    }

    function getcontentfirst(pageno) {
        content.innerHTML="";
        let displayData = aldata.slice(pageno*10 , (pageno + 1)*10);
       
        displayData.map((get)=>{
            
            const tr = document.createElement("tr");
                tr.innerHTML=`
                <td id="dataid">${get.id}</td>
                <td >${get.email}</td>
                <td >${get.name}</td>`;
                content.appendChild(tr);
        }) 
    }

 function getcontentnext(pageno) {
    content.innerHTML="";
    let displayData = aldata.slice(pageno*10 , (pageno + 1)*10);
   
    displayData.map((get)=>{
        
        const tr = document.createElement("tr");
            tr.innerHTML=`
            <td id="dataid">${get.id}</td>
            <td >${get.email}</td>
            <td >${get.name}</td>`;
            content.appendChild(tr);
    }) 
}













