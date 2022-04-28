import './singlepost.css'

export default function SinglePost() {
  return (
    <div className="single">SinglePost
        <img src="images/starbuckspost.jpg" alt="post01" className="singlePostImg" />
        <h1 className="singlePostTitle">
            스타벅스 클론 코딩
            <div className="singlePostEdit">
            <i class="singlePostIcon fa-solid fa-pencil"></i>
            <i class="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
        </h1>
        <p><a href="https://github.com/alby0927/moonbucks">https://github.com/alby0927/moonbucks</a></p>
        <div className="singlePostInfo">
            <span className="singlePostDate">a hour ago</span>
        <p>
         
        </p>
        </div>
    </div>
  )
}
