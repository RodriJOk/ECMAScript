//Una de las incorporaciones en ES9 fue las promises finally. 

const helloWorld = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
          ? setTimeout(()=>resolve("Hello World"), 3000)
          : reject (new Error("Test Error"))            
    }); 
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    //Esta es la nueva incorporacion de ES9: Finally
    .finally(()=>console.log("Finalizo"))