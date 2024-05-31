import {HomePage} from "./HomePage.js";
import {PricingCalculatorPage} from "./PricingCalculatorPage.js";
import {ResultsPage} from "./ResultsPage.js";
import {SummaryPage} from "./SummaryPage.js";

/**
 *
 * @param name {'HomePage' | 'PricingCalculator' | 'ResultsPage' | 'SummaryPage'}
 * @returns {*}
 */
function pages (name) {
    const pagesOptions = {
        homepage: new HomePage(),
        pricingcalculator: new PricingCalculatorPage(),
        resultspage: new ResultsPage(),
        summarypage: new SummaryPage(),
    }
    return pagesOptions[name.toLowerCase()];
}

export {
    pages
}