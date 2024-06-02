import {pages} from "../../po/index.js";

describe('Google Cloud Pricing Calculator functionality Tests', () => {

    before( async  () => {
        await pages("HomePage").open();
        await browser.maximizeWindow();
        //search Google Cloud Platform Pricing Calculator
        await pages("HomePage").header.searchInSearchField("Google Cloud Platform Pricing Calculator");
        await pages("ResultsPage").resultsSection.desiredResult.click()
        //open the form
        await pages("PricingCalculator").addEstimateButton.click();
        await pages("PricingCalculator").addEstimate.computeEngine.click();
        //filling the form
        await pages("PricingCalculator").computeEngine.setNumberOfInstancesIn(4);
        await pages("PricingCalculator").computeEngine.selectMachineTypeN1Standard8();
        await pages("PricingCalculator").computeEngine.addGpusButton.click();
        await pages("PricingCalculator").computeEngine.selectGPUModel("NVIDIA V100");
        await pages("PricingCalculator").closeMessageContainer();
        await pages("PricingCalculator").computeEngine.selectNumberOfGPUs("1");
        await pages("PricingCalculator").computeEngine.selectLocalSSD2x375GB();
        await pages("PricingCalculator").computeEngine.selectRegionNetherlands();
        await pages("PricingCalculator").computeEngine.selectCommittedUsage("1 Year");
    })

    it('should create an estimate with specified configurations and validate the price is calculated in the right section of the calculator', async () => {
        //get values
        const estimatedCost = await pages("PricingCalculator").costDetails.estimatedCostText()
        const expectedCost = `ESTIMATED COST $[amount] / mo`
        //check the price
        expect(estimatedCost).toEqual(expectedCost);

    });

    it('should verify the filled form data matches the summary', async () => {
        //Open estimate summary
        await pages("PricingCalculator").costDetails.clickShareButton();
        await pages("PricingCalculator").shareEstimate.openEstimateSummary.click();
        await pages("PricingCalculator").changeTab();
        //get values of Cost Estimate Summary
        const machineType = await pages("SummaryPage").costEstimateSummary.machineType.getText();
        const gpuModel = await pages("SummaryPage").costEstimateSummary.gpuModel.getText();
        const numberOfGpus = await pages("SummaryPage").costEstimateSummary.numberOfGpus.getText();
        const LocalSsd = await pages("SummaryPage").costEstimateSummary.localSsd.getText();
        const numberOfInstances = await pages("SummaryPage").costEstimateSummary.numberOfInstances.getText();
        const operatingSystem = await pages("SummaryPage").costEstimateSummary.operatingSystem.getText();
        const provisionalModel = await pages("SummaryPage").costEstimateSummary.provisionalModel.getText();
        const addGpus = await pages("SummaryPage").costEstimateSummary.addGpus.getText();
        const region = await pages("SummaryPage").costEstimateSummary.region.getText();
        const committedUse = await pages("SummaryPage").costEstimateSummary.committedUse.getText();
        //verify the values matches
        expect(machineType).toEqual("n1-standard-8, vCPUs: 8, RAM: 30 GB");
        expect(gpuModel).toEqual("NVIDIA V100");
        expect(numberOfGpus).toEqual("1");
        expect(LocalSsd).toEqual("2x375 GB");
        expect(numberOfInstances).toEqual("4");
        expect(operatingSystem).toEqual("Free: Debian, CentOS, CoreOS, Ubuntu or BYOL (Bring Your Own License)");
        expect(provisionalModel).toEqual("Regular");
        expect(addGpus).toEqual("true");
        expect(region).toEqual("Netherlands (europe-west4)");
        expect(committedUse).toEqual("1 year");
    });
});