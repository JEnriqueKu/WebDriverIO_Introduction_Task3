import {BasePage} from "./BasePage.js";
import {ResultsSection} from "../components/results/ResultsSection.js";

export class ResultsPage extends BasePage{
    constructor() {
        super();
        this.resultsSection = new ResultsSection();
    }


}