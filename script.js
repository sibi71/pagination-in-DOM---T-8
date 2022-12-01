const pagenumber = document.querySelector("#pagenumber");
const content = document.querySelector("#tbody");

let aldata = []




const api_URL='https://gist.githubusercontent.com/techieeycamp/85884f4327effa2cb7677d3d15964104/raw/465fda01beaeff7170aae3327c4c61e1a09bc16d'

async function getapi(url){
    const res = await fetch(url);
     const data = await res.json();
      aldata = data;
   
        getpagenumber(aldata);

   

}
 
getapi(api_URL);



async function getpagenumber(){
    let pageno = 0; 
    let pages = aldata.length / 10 ;
    for (let i= 0 ; i < pages; i++){
        let button = document.createElement("button");
        button.innerHTML=`${i+1}`;
        button.onclick = ()=>{
            pageno = i;
           
            // getcontent();
            content.innerHTML="";
            let displayData = aldata.slice(pageno*10 , (pageno + 1)*10);
            displayData.map((data)=>{
                const tr = document.createElement("tr");
                    tr.innerHTML=`
                    <td id="dataid">${data.id}</td>
                    <td >${data.email}</td>
                    <td >${data.name}</td>`;
                    
                    content.appendChild(tr);
            }) 
          
    };  

    pagenumber.append(button);
    }
}

// async function getcontent() {
  
// }
// getcontent()












