import {BaseComponent} from "../common/BaseComponent.js";

export class AddEstimate extends BaseComponent{
    constructor() {
        super("div .bwApif-cnG4Wd");
    }

    get computeEngine(){
        return this.rootElement.$(".DzHYNd > :first-child .PtwYlf")
    }

    async clickOnComputeEngine(){
        await this.computeEngine.waitForClickable();
        await this.computeEngine.click();
    }

}