import {BasePage} from "./BasePage.js";
import {AddEstimate} from "../components/pricing_calculator/AddEstimate.js";
import {ComputeEngine} from "../components/pricing_calculator/ComputeEngine.js";
import {CostDetails} from "../components/pricing_calculator/CostDetails.js";
import {ShareEstimate} from "../components/pricing_calculator/ShareEstimate.js";


export class PricingCalculatorPage extends BasePage{
    constructor() {
        super();
        this.addEstimate = new AddEstimate();
        this.computeEngine = new ComputeEngine();
        this.costDetails = new CostDetails();
        this.shareEstimate = new ShareEstimate();
    }

    clickOnAddEstimate(){
        return $(".UywwFc-vQzf8d").click();
    }

    async closeMessageContainer(){
        try {
            await $("#container .close").click();
        } catch (e){

        }
    }
}