import React from "react";
class Username extends React.Component
{
   constructor()
   {
       super();

   }

     temp(k) {
         console.log("here is "+k)
         for(let i=0;i<k.length;i++)
       {
          
         (i===0) && (k[i] ===  k[i].toUpperCase()) ? console.log(" ") : alert('First Alphabet should be capital')   
       } 
    }




}
export default Username;