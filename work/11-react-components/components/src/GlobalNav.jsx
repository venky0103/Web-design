import { useState  } from 'react';

import menu from './menu';

import './GlobalNav.css'

function GlobalNav({className, onPageChange}) {

    const [showMenu, setShowMenu] = useState(false);

    const showMenuClass = showMenu ? '' : 'global-nav__list--hidden';

    const handleItemClick = (pageName) => {
        onPageChange(pageName);
        setShowMenu(false);
      };


    const list = menu.map( item => {
        return (
            <li className="global-nav__item" key={item.name}>
             <a className="global-nav__link" href="{item.path}"onClick={(e) => {
          e.preventDefault();
          handleItemClick(item.name);
        }}>
                <i className={item.icon}></i> {item.name}
             </a>
            </li>
        );
    });

    return (
        <nav className={`global-nav ${className}`}>
             <button className="nav__btn" onClick={ () => setShowMenu(!showMenu)}>
                <i className="fa-solid fa-bars"></i> Menu
             </button>
             <ul className={`global-nav__list ${showMenuClass}`}>
                { list }
            </ul>
        </nav>
    );
}


export default GlobalNav;