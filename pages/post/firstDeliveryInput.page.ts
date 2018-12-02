import Page from '../page';

class FirstDeliveryInputPage extends Page {
    get trackNoBox() { return $('input[name="firstDeliveryInputTrackNo"]') }
    get nextButton() { return $('input[name="submit"]') }
}

export default new FirstDeliveryInputPage();