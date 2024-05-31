import {BaseComponent} from "../common/BaseComponent.js";

export class CostDetails extends BaseComponent{
    constructor() {
        super("div.uMSQA");
    }

    get estimatedCost(){
        return this.rootElement.$(".wFCpDb");
    }

    get shareButton(){
        return this.rootElement.$(".FOBRw-kBDsod-Rtc0Jf-OWXEXe-M1Soyc");
    }

    async estimatedCostText(){
        const text = await this.estimatedCost.getText();
        return text;
    }

    async clickShareButton(){
        await this.shareButton.scrollIntoView();
        await browser.scroll(0,-1000);
        await this.shareButton.waitForClickable();
        await this.shareButton.click();
    }
}