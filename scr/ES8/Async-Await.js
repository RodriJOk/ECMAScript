//Una de las funcionalidades que se agrego en ES8 fue la incorporacion de Async/Await.
//¿Que es async-await?
//
const helloWorld = ()=>{
    return new Promise ((resolve, reject)=>{
     (true)
       ? setTimeout(()=> resolve ("Hello World"), 3000)      
       : reject(new Error("Error en test !"))
    })
}

const helloWorldAsync = async ()=> {
    const hello = await helloWorld();
    console.log(hello)
}

helloWorldAsync()
//El resultado: Despues de los 3 segundos, se muestra en consola Hello World. 

//Veamos ahora otro ejemplo. 

const helloWorld = ()=>{
    return new Promise ((resolve, reject)=>{
     (true)
       ? setTimeout(()=> resolve ("Hello World"), 3000)      
       : reject(new Error("Error en test !"))
    })
}

const helloWorldAsync = async ()=> {
    const hello = await helloWorld();
    console.log(hello)
}

helloWorldAsync()

const otraFuncion = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello)
    }catch (error){
        console.log(error)
    }
}

//Resultado: 
// HelloWorld
// HelloWorld