const timeout = function(sec){
    return new Promise(function(reject){
        setTimeout(function(){
            reject(new Error(`request tok to long !!!! timeout after ${sec} minutes`));
        },sec *1000);
    });
}



export const getJSON = async function(url){
    try{  
        const response =fetch(url);
          const res = await Promise.race([response,timeout(10)]);
          const data = await res.json();
          if(!res.ok) throw new Error(`${data.message}`);
            

              return data;
    }
    catch(err){
        throw err;
    }
}


export const sendJSON = async function(url,uploadData){
    try{  
        const response =fetch(url,
            {
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(uploadData)
            }
        );
          const res = await Promise.race([response,timeout(10)]);
          const data = await res.json();
          if(!res.ok) throw new Error(`${data.message}`);
            

              return data;
    }
    catch(err){
        throw err;
    }
}