import './portfolio.css'
import Header from '../../comp/header/Header';
import Posts from '../../comp/posts/Posts';
import Sidebar from '../../comp/sidebar/Sidebar';

export default function Portfolio() {
  return (
      <>
        <Header />
        <div className="container home">
            <div className="post">
                 <Posts></Posts>
            </div>
            <Sidebar></Sidebar>
        </div>
      </>
  )
}
