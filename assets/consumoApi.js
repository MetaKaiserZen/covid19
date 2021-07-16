var data= []
    
   const getData = async () => {
       try{
        const resp = await fetch('http://localhost:3000/api/total');
        data = await resp.json();        
        console.log(data);
       }
        catch(error){
            console.log(error)
        }

        return data
    } 

    export { getData, data}