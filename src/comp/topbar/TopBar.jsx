import './topbar.css'
import { Link } from 'react-router-dom';

export default function TopBar() {
 const user = false;  
 return (
    <div className="top">
        <div className="container topInn">
        <div className="topLeft">
             <i className="topIcon fa-brands fa-facebook-square"></i>
             <i className="topIcon fa-brands fa-twitter-square"></i>
             <i className="topIcon fa-brands fa-pinterest-square"></i>
             <i className="topIcon fa-brands fa-instagram-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link to="/" className="homeLink">list</Link></li>
                <li className="topListItem"><Link to ="/About">about</Link></li>
                <li className="topListItem"><Link to ="/Contact">contact</Link></li>
                <li className="topListItem"><Link to ="/Portfolio">Portfolio</Link></li>
                
            </ul>
        </div>
        <div className="topRight">
            <img src="images/me.png" alt="홍길동" className="topImg" />
            <i className="topSearchIcon fas fa-search"></i>
        </div>
        </div>
    </div>
  )
}
