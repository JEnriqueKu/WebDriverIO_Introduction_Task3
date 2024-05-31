export class BaseComponent {
    constructor(rootSelector) {
        this.rootSelector = rootSelector;
    }

    get rootElement(){
        return $(this.rootSelector);
    }

    async scrollToElement(selector){
        await selector.scrollIntoView();
        await browser.scroll(0,-300);
    }
}