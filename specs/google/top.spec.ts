//var assert = require('assert');
import assert = require('assert');
import TopPage from '../../pages/top.page';

describe('top form', () => {
    it('should...', () => {
        TopPage.open();
        TopPage.queryBox.setValue('foo');
        TopPage.submit();
        TopPage.saveScreenShot('./screenshots/result.png')
        assert.strictEqual('hoge', 'hoge', 'hoge is not matched');
    });
});
