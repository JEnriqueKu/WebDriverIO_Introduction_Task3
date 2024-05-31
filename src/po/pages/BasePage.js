import {Header} from "../components/common/Header.js";


export class BasePage {
    constructor(url) {
        this.url = url;
        this.header = new Header();
    }

    open(){
        return browser.url(this.url);
    }

    async changeTab(){
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[handles.length-1]);
    }

}