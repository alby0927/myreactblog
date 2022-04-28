import './contact.css'
import Header from '../../comp/header/Header';
import Posts from '../../comp/posts/Posts';
import Sidebar from '../../comp/sidebar/Sidebar';
import ContactDetail from '../../comp/contactdetail/ContactDetail'

export default function contact() {
  return (
      <>
        <Header />
        <div className="container home">
            <div className="post">
                 <ContactDetail/>
            </div>
            <Sidebar></Sidebar>
        </div>
      </>
  )
}
