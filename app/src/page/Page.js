import Component from 'Src/component/Component';
import Header from 'Src/header/Header';

import './Page.css';

class Page extends Component {
    constructor() {
        super();
    }

    render() {
        return `<div class="page">
            ${new Header().render()}
            Page Text
        </div>`;
    }
}

export default Page;
