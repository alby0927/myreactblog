import './posts.css'
import {Link} from 'react-router-dom'

export default function Posts() {
  return (
    <div className="posts">
        <img src="images/post01.jpg" alt="post001" className="postImg" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">
            Life
            </span>
            <span className="postCat">
            Etc.
            </span>
          </div>
          <p className="ppostTitle">
            <Link to="/detail">
          이상은 이는 위하여, 작고 천자만홍이 영원히 가치를 쓸쓸하랴? 앞이 곳으로 수 교향악이다.
            </Link>
          </p>
          <span className="postDate">a hour ago</span>
          
        </div>
        <hr />
    </div>
  )
}
