import React from "react";
import {Button} from "reactstrap";
class But extends React.Component{
   render()
   {
       return(
           <div>
             <Button color = "primary" active>Red</Button>{' '}<br/>
             <Button color = "secondary" disabled>Red</Button>{' '}<br/>
             <Button color = "success">Red</Button>{' '}<br/>
             <Button color = "info">Red</Button>{' '}<br/>
             <Button color = "warning">Red</Button>{' '}<br/>
             <Button color = "danger">Red</Button>{' '}<br/>
             <Button color = "Link">Red</Button>{' '}<br/>

             <Button outline  color = "primary" disabled>Red</Button>{' '}<br/>
             <Button outline color = "secondary">Red</Button>{' '}<br/>
             <Button outline color = "success">Red</Button>{' '}<br/>
             <Button outline color = "info">Red</Button>{' '}<br/>
             <Button outline color = "warning" >Red</Button>{' '}<br/>
             <Button outline color = "danger" >Red</Button>{' '}<br/>
             <Button outline color = "Link">Red</Button>{' '}<br/>
            
               
             <Button outline  color = "primary" size = "lg">Red</Button>{' '}<br/>
             <Button outline color = "secondary" size = "lg">Red</Button>{' '}<br/>
             <Button outline color = "success" size = "sm">Red</Button>{' '}<br/>
             <Button outline color = "info" size ="sm">Red</Button>{' '}<br/>
             <Button outline color = "warning" size = "sm">Red</Button>{' '}<br/>
             <Button  color = "danger" size = "lg">Red</Button>{' '}<br/>
             <Button outline color = "Link" size = "sm" block>Red</Button>{' '}<br/>
            



           </div>
       )
   }

}
export default But;