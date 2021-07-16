   const getData = async () => {
       try{
        const resp = await fetch('http://localhost:3000/api/total');
        const {data} = await resp.json();  
        return data      
        // console.log(data);
       }
        catch(error){
            console.log(error)
        }
    } 

    export { getData}