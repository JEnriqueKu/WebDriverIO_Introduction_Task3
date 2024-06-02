import {Header} from "../components/common/Header.js";
import {openPage} from "../utils/CommonFunctions.js";


export class HomePage {
    constructor() {
        this.url = "https://cloud.google.com/";
        this.header = new Header();
    }

    open(){
        return openPage(this.url);
    }

}