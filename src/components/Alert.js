import React from 'react'

function Alert(props) { 
     
  function capitalize(text)
{
    return text && text[0].toUpperCase() + text.slice(1);
}      
    
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
   <strong>{capitalize(props.alert.type)}</strong>:  {props.alert.message}
</div>
  )
} 
export default Alert
