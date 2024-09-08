import ic_menu from '../../assets/icons/ic_menu.svg';
import ic_btn_create from '../../assets/icons/ic_btn_create.svg';
import ic_search from'../../assets/icons/ic_search.svg';
import ic_arrow_down from '../../assets/icons/ic_arrow_down.svg';

import img_avatar from '../../assets/images/avatar.png'


import './Header.css'


const Header = ({toggleDrawer}) => {
    return (
        <header className="header_main">
            <div className="header_left">
                <button className="btn_create" onClick={toggleDrawer}>
                    <img className='btn_hamberger_menu' src={ic_menu}/>
                </button>
                <div className="gr_button_create">
                    <img src={ic_btn_create}/>
                    <p>Create</p>
                </div>
            </div>
            <div className="header_search">
                <img src={ic_search}/>
            </div>
            <div className="header_right ">
                <p>25 day left in trial</p>
                <button className='Add_billing_info'>Add billing info</button>
                <img className='img_header_avatar' src={img_avatar}></img>
                <img className='ic_header_arrow_down' src={ic_arrow_down}></img>
            </div>
        </header>
    );
}

export default Header;