import assert = require('assert');
import TopPage from '../pages/post/top.page';
import FirstDeliveryInputPage from '../pages/post/firstDeliveryInput.page';
import DeliFirstDeliveryInputPage from '../pages/post/deli.firstDeliveryInput.page';

describe('再配達シナリオ', function() {
    it('再配達番号を入れる', function() {
        TopPage.open();
        TopPage.haitatsu.click();
        TopPage.saveScreenShot('./screenshots/haitatsu.png')

        FirstDeliveryInputPage.trackNoBox.setValue('123456789012');
        FirstDeliveryInputPage.saveScreenShot('./screenshots/input.png');
        FirstDeliveryInputPage.nextButton.click();
        FirstDeliveryInputPage.saveScreenShot('./screenshots/next.png');

        var title = DeliFirstDeliveryInputPage.title.getText();
        assert.strictEqual('「ご不在連絡票」情報の入力', title);
        DeliFirstDeliveryInputPage.myHomeRadio.click();
        DeliFirstDeliveryInputPage.saveScreenShot('./screenshots/kibou.png');
        DeliFirstDeliveryInputPage.nextButton.click();
        DeliFirstDeliveryInputPage.saveScreenShot('./screenshots/next2.png');
    });
})