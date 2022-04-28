import './detail.css'
import Sidebar from '../../comp/sidebar/Sidebar'
import SinglePost from '../../comp/SinglePost/SinglePost'

export default function Detail() {
  return (
    <div className="detail container">
        <SinglePost />
        <Sidebar />
    </div>
  )
}
