const URL = "https://api.thecatapi.com/v1/images/0XYvRd7oD ";

// const getApi = async ()=>{
//     console.log("getting data...");
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
// }

function getApi(){
    fetch(URL).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}