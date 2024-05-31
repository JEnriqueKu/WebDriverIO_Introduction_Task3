import {BasePage} from "./BasePage.js";
import {CostEstimateSummary} from "../components/summary/CostEstimateSummary.js";

export class SummaryPage extends BasePage{
    constructor() {
        super("https://cloud.google.com/products/calculator/estimate-preview/2ff0a375-9dc6-4bf9-94d8-0c497a9abf76");
        this.costEstimateSummary = new CostEstimateSummary();
    }

}