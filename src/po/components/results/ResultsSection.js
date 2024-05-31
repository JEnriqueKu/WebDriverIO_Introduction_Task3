import {BaseComponent} from "../common/BaseComponent.js";

export class ResultsSection extends BaseComponent{
    constructor() {
        super(".catalog-results-container");
    }

    get desiredResult(){
        return this.rootElement.$(".gsc-thumbnail-inside [href=\"https://cloud.google.com/products/calculator\"]")
    }

    clickOnPricingCalculatorResult(){
        return this.desiredResult.click();
    }
}