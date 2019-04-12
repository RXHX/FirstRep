import React from "react";
import {Alert} from "reactstrap";
class All extends React.Component{
  render()
  {
      return(
      <div>
     <Alert color="primary">Hello</Alert>
     <Alert color="secondary">Hello this is an <a href="#" className="alert-link">example</a></Alert>
     <br/>
     <br/>
     <Alert color="success" isOpen = {true}>
        <h4 className="alert-heading">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This example text is going
          to run a bit longer so that you can see how spacing within an alert works with this kind
          of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
        </p>
      </Alert>
     

      </div>
      )
  }
}
export default All;