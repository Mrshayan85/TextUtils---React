import React   from 'react'
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const getButtonText = () => {
    if (props.color === 'light') {
      return 'Light Mode' 
    }
      if(props.color === 'danger'){
        return 'Red Mode' 
      }
      if(props.color === 'dark'){
        return 'Dark Mode' 
      }
    else {
      return 'Light Mode';
    }
  };
 
//   const HandlerTargetFn = (event) => {
//     const value = event.target.dataset.value; 
//   setColor(value); 
// if(value === "dark"){
//   document.body.style.backgroundColor = '#7F8389'
//   document.body.style.color = 'white' 
//   props.showAlert("Theme changed to Dark","dark");
// }
// if(value === "danger"){
//   document.body.style.backgroundColor = '#F7454A'
//   document.body.style.color = 'white' 
//   props.showAlert("Theme changed to Red","danger");  }

//   if(value === "light"){
//     document.body.style.backgroundColor = 'white'
//     document.body.style.color = 'black'
//   props.showAlert("Theme changed to Light","success");
//   }
// };

  //  let [color, setColor] = useState(); 
  return (
    <nav className={`navbar navbar-expand-lg  navbar-light navbar-${props.color === 'danger' ? 'dark' : props.color}  bg-${props.color} `}>
      <a className="navbar-brand" href="/">{props.titleName}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link  className="nav-link" to="/">Home <span className="sr-only">(current)</span> </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="aboutus">About </Link>
          </li>
        </ul> 
        <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {getButtonText()} 
  </button>
  <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
    <button  onClick={props.HandlerTargetFn } value="light" className={`dropdown-item `} >Light</button>
    <button  onClick={props.HandlerTargetFn }  value="danger" className="dropdown-item" >Red</button>
    <button  onClick={props.HandlerTargetFn}  value="dark" className="dropdown-item  " >Dark</button>
  </div>
  </div>  
        {/* <form className="form-inline my-2 my-lg-0">
      <input onChange={HandlerTargetFn}   className="mx-3 form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/> */}
      {/* <button  className="mx-4 btn btn-outline-success my-2 my-sm-0"  >Search</button> */}
    {/* </form> */}
        {/* <div className="container">   
    <input type="color"  className="form-control form-control-color " id="myColor" value="#CCCCCC" title="Choose a color"/>
      </div> */}


        {/* <button className="mx-4 btn btn-outline-success my-2 my-sm-0"onClick={props.HandlerDarkModeFn} >{getButtonText()}</button>  */}
   </div>
    </nav>
  )
}
Navbar.propTypes = {
  titleName: PropTypes.string.isRequired
} 