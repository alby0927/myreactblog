import './about.css'
import Header from '../../comp/header/Header';
import Posts from '../../comp/posts/Posts';
import Sidebar from '../../comp/sidebar/Sidebar';
import AboutDetail from '../../comp/aboutdetail/AboutDetail'

export default function About() {
  return (
      <>
        <Header />
        <div className="container home">
            <div className="post">
                 <AboutDetail/>
            </div>
            <Sidebar></Sidebar>
        </div>
      </>
  )
}
