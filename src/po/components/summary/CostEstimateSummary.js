import {BaseComponent} from "../common/BaseComponent.js";

export class CostEstimateSummary extends BaseComponent{
    constructor() {
        super(".qBohdf.AlLELb");
    }


    get machineType() {
        return this.rootElement.$("//span[text()='Machine type']/following-sibling::span");
    }

    get gpuModel() {
        return this.rootElement.$("//span[text()='GPU Model']/following-sibling::span");
    }

    get numberOfGpus() {
        return this.rootElement.$("//span[text()='Number of GPUs']/following-sibling::span");
    }

    get localSsd() {
        return this.rootElement.$("//span[text()='Local SSD']/following-sibling::span");
    }

    get numberOfInstances() {
        return this.rootElement.$("//span[text()='Number of Instances']/following-sibling::span");
    }

    get operatingSystem() {
        return this.rootElement.$("//span[text()='Operating System / Software']/following-sibling::span");
    }

    get provisionalModel() {
        return this.rootElement.$("//span[text()='Provisioning Model']/following-sibling::span");
    }

    get addGpus() {
        return this.rootElement.$("//span[text()='Add GPUs']/following-sibling::span");
    }

    get region() {
        return this.rootElement.$("//span[text()='Region']/following-sibling::span");
    }

    get committedUse() {
        return this.rootElement.$("//span[text()='Committed use discount options']/following-sibling::span");
    }

// functions
    async machineTypeText() {
        await this.scrollToElement(this.machineType)
        const text = await this.machineType.getText();
        return text;
    }

    async gpuModelText() {
        await this.scrollToElement(this.gpuModel)
        const text = await this.gpuModel.getText();
        return text;
    }

    async numberOfGpusText() {
        await this.scrollToElement(this.numberOfGpus)
        const text = await this.numberOfGpus.getText();
        return text;
    }

    async localSsdText() {
        await this.scrollToElement(this.localSsd)
        const text = await this.localSsd.getText();
        return text;
    }

    async numberOfInstancesText() {
        await this.scrollToElement(this.numberOfInstances)
        const text = await this.numberOfInstances.getText();
        return text;
    }

    async operatingSystemText() {
        await this.scrollToElement(this.operatingSystem)
        const text = await this.operatingSystem.getText();
        return text;
    }

    async provisionalModelText() {
        await this.scrollToElement(this.provisionalModel)
        const text = await this.provisionalModel.getText();
        return text;
    }

    async addGpusText() {
        await this.scrollToElement(this.addGpus)
        const text = await this.addGpus.getText();
        return text;
    }

    async regionText() {
        await this.scrollToElement(this.region)
        const text = await this.region.getText();
        return text;
    }

    async committedUseText() {
        await this.scrollToElement(this.committedUse)
        const text = await this.committedUse.getText();
        return text;
    }
}