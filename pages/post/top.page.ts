import Page from '../page';

class TopPage extends Page {
    open() {
        super.open('/index.html');
    }

    get haitatsu() { return $('#toolBox .tool ol li:last-child > a') }
}

export default new TopPage();