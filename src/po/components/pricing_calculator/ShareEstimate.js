import {BaseComponent} from "../common/BaseComponent.js";

export class ShareEstimate extends BaseComponent{
    constructor() {
        super("div.ZgevAb");
    }

    get openEstimateSummary(){
        return this.rootElement.$(" .MExMre");
    }

    async clickOpenEstimateSummary(){
        await this.openEstimateSummary.scrollIntoView();
        await browser.scroll(0,-1000);
        await this.openEstimateSummary.click();
    }
}