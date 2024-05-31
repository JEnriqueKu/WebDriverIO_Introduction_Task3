import {BaseComponent} from "../common/BaseComponent.js";

export class ComputeEngine extends BaseComponent{
    constructor() {
        super(".U4lDT");
    }

    // selectors

    get plusNumberOfInstances(){
        return this.rootElement.$(".QHLF5b > :first-child [aria-label='Increment']");
    }

    get machineType(){
        return this.rootElement.$(".LHK0xb.KXFYXb > :nth-child(3) .VfPpkd-aPP78e");
    }

    get machineTypeOptionN1Standard8(){
        return this.rootElement.$("li.MCs1Pd[data-value=\"n1-standard-8\"]")
    }
    
    get addGpusButton(){
        return this.rootElement.$("button[aria-label=\"Add GPUs\"]")
    }

    get gpuModelButton(){
        return this.rootElement.$("div[data-field-type=\"158\"]")
    }

    get numberOfGpusButton(){
        return this.rootElement.$("div[data-field-type=\"174\"]")
    }

    get localSsdButton(){
        return this.rootElement.$("div[data-field-type=\"180\"]")
    }

    get regionButton(){
        return this.rootElement.$("div[data-field-type=\"115\"]")
    }

    // functions

    async setNumberOfInstancesIn(instances){
        for (let i = 1; i < instances; i++) {
            await this.plusNumberOfInstances.click();
        }
    }

    async selectMachineTypeN1Standard8(){
        await this.scrollToElement(this.machineType);
        await this.machineType.click();
        await this.machineTypeOptionN1Standard8.click();
    }

    async selectAddGPUs(){
        await this.scrollToElement(this.addGpusButton);
        await this.addGpusButton.click();
    }

    /**
     *
     * @param model {'NVIDIA T4' | 'NVIDIA V100' | 'NVIDIA TESLA P4' | 'NVIDIA TESLA P100' | 'NVIDIA TESLA K80'}
     * @returns {Promise<void>}
     */
    async selectGPUModel(model){
        const models = {
            'NVIDIA T4': 'li[data-value="nvidia-tesla-t4"]',
            'NVIDIA V100': 'li[data-value="nvidia-tesla-v100"]',
            'NVIDIA TESLA P4': 'li[data-value="nvidia-tesla-p4"]',
            'NVIDIA TESLA P100': 'li[data-value="nvidia-tesla-p100"]',
            'NVIDIA TESLA K80': 'li[data-value="nvidia-tesla-k80"]'
        }
        await this.scrollToElement(this.gpuModelButton);
        await this.gpuModelButton.click();
        const modelSelector = await this.rootElement.$(models[model.toUpperCase()]);
        await modelSelector.waitForDisplayed();
        await modelSelector.click();
    }

    /**
     *
     * @param numGpus {'1' | '2' | '4'}
     * @returns {Promise<void>}
     */
    async selectNumberOfGPUs(numGpus) {
        const gpuOptions = {
            '1': 'ul[aria-label=\"Number of GPUs\"] li[data-value=\"1\"]',
            '2': 'ul[aria-label=\"Number of GPUs\"] li[data-value=\"2\"]',
            '4': 'ul[aria-label=\"Number of GPUs\"] li[data-value=\"4\"]'
        };

        await this.scrollToElement(this.numberOfGpusButton);
        await this.numberOfGpusButton.click();
        const gpuSelector = await this.rootElement.$(gpuOptions[numGpus]);
        await gpuSelector.waitForDisplayed();
        await gpuSelector.click();
    }

    async selectLocalSSD2x375GB(){
        await this.scrollToElement(this.localSsdButton);
        await this.localSsdButton.click();
        const localStoreSelector = await this.rootElement.$("ul[aria-label=\"Local SSD\"] li[data-value=\"2\"]");
        await localStoreSelector.waitForDisplayed();
        await localStoreSelector.click();
    }

    async selectRegionNetherlands(){
        await this.scrollToElement(this.regionButton);
        await this.regionButton.click();
        const regionOptionSelector = await this.rootElement.$("ul[aria-label=\"Region\"] li[data-value=\"europe-west4\"]");
        await regionOptionSelector.waitForDisplayed();
        await regionOptionSelector.click();
    }

    /**
     *
     * @param time {'None' | '1 Year' | '3 Years'}
     * @returns {Promise<void>}
     */
    async selectCommittedUsage(time){
        const timeSelectors = {
            'none': '.e2WL2b input[id="none"]',
            '1 year': '.e2WL2b input[id="1-year"]',
            '3 years': '.e2WL2b input[id="3-years"]'
        }
        const committedUsageSelector = await this.rootElement.$(timeSelectors[time.toLowerCase()] + " + label");
        await this.scrollToElement(committedUsageSelector);
        await committedUsageSelector.click();
    }

}