export default class Page {
    open (path: any) {
        browser.url(path)
    }

    saveScreenShot(path: string) {
        browser.saveScreenshot(path)
    }
}
