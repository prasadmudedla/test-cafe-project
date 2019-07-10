import { Selector, t } from 'testcafe';

export default class GoogleSearchPage {

    constructor() {
        this.searchbox = Selector('input').withAttribute('title', 'Search');
    }

    async getTitle() {
        return Selector('title').textContent;
    }

    async searchFor(searchterm) {
        await t.typeText(this.searchbox, searchterm);
        await t.pressKey('enter');
    }

}





