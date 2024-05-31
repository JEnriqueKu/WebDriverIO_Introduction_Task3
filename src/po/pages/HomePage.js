import {BasePage} from "./BasePage.js";
import {Header} from "../components/common/Header.js";


export class HomePage extends BasePage{
    constructor() {
        super("https://cloud.google.com/");
        this.header = new Header();
    }


}