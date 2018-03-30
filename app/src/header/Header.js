import Component from 'Src/component/Component';

import './Header.css';

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return `<div class="header"><div class="header__text">Header Text</div></div>`;
    }
}

export default Header;
