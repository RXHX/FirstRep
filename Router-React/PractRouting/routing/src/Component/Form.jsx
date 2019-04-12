import React from "react";
import {InputGroup,InputGroupAddon,InputGroupText,Input,Label,Table } from "reactstrap";
import {FaUserAlt,FaArchway} from "react-icons/fa"
import {IoIosCall,IoIosMail} from "react-icons/io"
import "../Component/check.css"
import Username from "../entities/Username";
class Formm extends React.Component{
   constructor()
   {
    super();
     this.state = {
         username : '',
         address1 : "",
         address2 : "",
         city : "",
         state : "",
         Zip : "",
         Call : "",
         Email : ""
     }
     this.user = this.user.bind(this);
    


   }
  
    user(e)
   {
     e.preventDefault();
   this.setState(
     {
       username:e.target.value
     },
     () =>{
      console.log(this.state.username+"HEY")
      (Username.prototype.temp(this.state.username))
    }
   )
   }

     add1(e)
     {
      e.preventDefault();
      this.setState(
       { 
         address1: e.target.value
       }, () =>{

        
       }
       
       )

     }

    add2(e)
    {
      e.preventDefault();
      this.setState(
     {
        address2 : e.target.value

     }, () =>{
    
         
    
    }
     
     
     )


    }
   
    states(e)
    {
      e.preventDefault();
      this.setState({
        state: e.target.value
      },
      () =>{

      })


    }
  
     city(e)
     {
      e.preventDefault();
      this.setState(
        {
          city : e.target.value
        },
        () =>{

        }

      )


     }
     
     zip(e)
     {
       e.preventDefault();
       this.setState({
        zip : e.target.value
       },
       () =>{

       }
       )
 
     }

     call(e)
     {
      e.preventDefault();
      this.setState(
        {
        call : e.target.value
        },
        () =>{

        }
        
        )


     }

    email(e)
    {
     e.preventDefault();
     this.setState(
       {
         email : e.target.email
       }
     )
 


    }

render()
{
return(
  <form>
<Table className = "check">
<tbody>
<tr>
  
  
<InputGroup>
 Username 
<InputGroupAddon addonType="prepend">
<InputGroupText>
<FaUserAlt/>
</InputGroupText>
</InputGroupAddon>
<Input type = "text"placeholder="username" name = "User" value = {this.state.username} onChange ={this.user}/>
</InputGroup>



</tr>

  
  <tr>
<InputGroup>
<td>
Address Line 1 
</td>
<InputGroupAddon addonType="prepend">
<InputGroupText>
<FaArchway/>
</InputGroupText></InputGroupAddon>
<Input type = "text" placeholder="Address Line 1" name = "Add1" value = {this.state.address1} />
</InputGroup>

</tr>

  
  <tr>
<InputGroup>
 <td>Address Line 2</td> 
<InputGroupAddon addonType="prepend"><InputGroupText><FaArchway/></InputGroupText></InputGroupAddon>
<Input type = "text" placeholder="Address Line 2" name = "Add2" value = {this.state.address2} />
</InputGroup>

</tr>





<tr>
  
<InputGroup>
<td> City </td>
<InputGroupAddon addonType="prepend"><InputGroupText><FaArchway/></InputGroupText></InputGroupAddon>
<Input type = "text" placeholder="City" name = "City" value = {this.state.city} />
</InputGroup>


</tr>
    
<tr>
<InputGroup>
<td>State/Province/Region </td><InputGroupAddon addonType="prepend"><InputGroupText><FaArchway/></InputGroupText></InputGroupAddon>
<Input type = "text" placeholder="State/Province/Region" name = "State" value = {this.state.state} />
</InputGroup>
</tr>



 <tr>
    
<InputGroup>
<td>Postal Code/ZIP </td><InputGroupAddon addonType="prepend"><InputGroupText><FaArchway/></InputGroupText></InputGroupAddon>
<Input type = "text" placeholder="Postal Code/ZIP" name = "ZIP" value = {this.state.Zip} />
</InputGroup>

</tr>




  <tr>
    <InputGroup>
<td>Phone Call </td> <InputGroupAddon addonType="prepend"><InputGroupText><IoIosCall/></InputGroupText></InputGroupAddon>
<Input type = "text" placeholder="Phone Call" name = "Call" value = {this.state.Call} />
</InputGroup>
</tr>









  <tr>

<InputGroup>
<td> Email </td><InputGroupAddon addonType="prepend"><InputGroupText><IoIosMail/></InputGroupText></InputGroupAddon>
<Input type = "text"  placeholder="Email" name ="Email" value = {this.state.Email} />
</InputGroup>

</tr>


<input type = "submit" value = "Submit"></input>

</tbody>






</Table>
</form>
)





}




}
export default Formm;