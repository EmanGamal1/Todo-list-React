import headerIMG from '../../Images/headerIMG.png';
import Btn from '../../SharedUI/Btn/Btn';
import './Header.css';

const Header = () => {
    return(
        <div className="header d-flex">
          <div className="content">
            <h1>Todo List</h1>
            <h3>Organize your time Now!</h3>
            <Btn name="btn btn-outline-light mt-3" title="Explore Now" />
          </div>
          <div className="float-right ms-auto">
            <img src={headerIMG} alt="" className="mainImage" />
          </div>
        </div>
    )
}

export default Header;