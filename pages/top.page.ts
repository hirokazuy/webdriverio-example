import Page from './page';

class TopPage extends Page {
    get queryBox () { return $('input[name="q"]') }
    get submitBtn() { return $$('input[name="btnK"]') }

    open() {
        super.open('/');
    }

    submit() {
        this.submitBtn.forEach(function(btn){
            if (btn.isVisible()) {
                btn.click();
            }
        })
    }
}

export default new TopPage();
