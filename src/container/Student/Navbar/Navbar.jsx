import {Component} from "react";
import {MenuData} from './MenuData';
import "./Navbar.css";
import {Link} from "react-router-dom";
import logo from './Trex.jpg';
import { Outlet } from "react-router-dom";
class Navbar extends Component{
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked});
    }

    render(){
        return(
            <div className="Nav_container">
        <nav className="NavbarItems">
        
            <h1 className="Nav_logo"><img  className="nav_logo" src={logo}></img> Trex-Learn </h1>
            <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked?"fas fa-times":"fas fa-bars"}></i>
        </div>
            <ul className={this.state.clicked?"navmenu active" : "navmenu"}>
            {MenuData.map((item,index)=>{
                return(
                    <li key={index}> 
                    <Link className={item.cName} to={item.path}>
                    
                    {item.title}
                    </Link>
                    
                </li>
                
                );
                
            })}
            
                
    
            </ul>
        </nav>
        <Outlet />
        </div>
        );
    }
}
export default Navbar;