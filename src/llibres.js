


async function Test(){
    const response= await fetch('./llibres.json', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    }})

            const temps = await response.json();
            
           var tempus=temps[0].title ; 
          var tempus2=temps[0].author;
          var tempus3=temps[1].title;
           var tempus4=temps[1].author;
                      
           

          
 return <div>
     <h1>{tempus}</h1>
     <h1>{tempus2}</h1>
     <h1>{tempus3}</h1>
     <h1>{tempus4}</h1>
 </div>;
   
            }





            
            export default Test;
              