import Page from '../page';

class DeliFirstDeliveryInputPage extends Page {
    get title() { return $('#content h2') }
    get myHomeRadio() { return $('input[value="1"]') }
    get nextButton() { return $('input[name="receriptSubmit"]') }
}

export default new DeliFirstDeliveryInputPage();