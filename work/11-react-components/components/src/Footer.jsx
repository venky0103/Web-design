import footer_menu from './footer-menu';

import './Footer.css';

function Footer() {
    const f__list = footer_menu.map( item => {
        return (
         <a href="item.path" key={item.name}>
            <i className={item.icon}></i> {item.name}
         </a>
        );
    });
    
    return (
        <footer>
            <div className="footer__items">
            {f__list}
        </div>
        </footer>
           
        
    );
}

export default Footer;