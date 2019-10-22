const withReverese = (PassedComponent) =>
 
{
 
   function reverse({ children, ...props }){
 
       console.log(children)
   return(
       <PassedComponent {...props}>
       {children.split("").reverse().join("")}
     </PassedComponent>
   )
  
     }
     return reverse
 
}
 
 
 
 
export default withReverese