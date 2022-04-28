import './sidebar.css'
export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">
                ABOUT ME
            </span>
            <img src="images/muteall1.jpg" alt="about" />
            <p>
            성장하는 애기 개발자
            </p>
        </div>

        <div clasName="sidebarItem">
            <span className="sidebarTitle">
                CATEGORIES
            </span>
            <ul lcassName="sidebarList">
              <li className="sidebarListItem">Travel</li>
              <li className="sidebarListItem">Life</li>
              <li className="sidebarListItem">Music</li>
              <li className="sidebarListItem">Work</li>
              <li className="sidebarListItem">Sports</li>
            </ul>
        </div>
            
        <div className="sidebarItem">
          <span className="sidebarTitle">
              TAG
          </span>
            <div className="tagList">
              <span className="tagListItem">여행</span>
              <span className="tagListItem">일상</span>
              <span className="tagListItem">음악</span>
              <span className="tagListItem">일</span>
              <span className="tagListItem">스포츠</span>
            </div>
        </div>

        <div className="sidebarItem">
          <span className="sidebarTitle">
              FOLLOW ME
          </span>
            <div className="socialList">
              <span><i className="topIcon fa-brands fa-facebook-square"></i></span>
              <span><i className="topIcon fa-brands fa-twitter-square"></i></span>
              <span><i className="topIcon fa-brands fa-pinterest-square"></i></span>
              <span><i className="topIcon fa-brands fa-instagram-square"></i></span>
            </div>
        </div>
    </div>
    
  )
}
