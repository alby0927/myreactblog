import './posts.css'
import {Link} from 'react-router-dom'

export default function Posts() {
  return (
    <div className="posts">
        <img src="images/starbuckspost.jpg" alt="post001" className="postImg" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">
            Clone coding.
            </span>
            <span className="postCat">
            Practice.
            </span>
          </div>
          <p className="ppostTitle">
            <Link to="/detail">
            스타벅스 클론 코딩
            </Link>
          </p>
          <span className="postDate">a hour ago</span>
          
        </div>
        <hr />
    </div>
  )
}
