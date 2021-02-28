import { Selector, t } from "testcafe";

export default class BasePage {

    public newslatter =  {
        newslatterInput: Selector('.newsletter-input'),
        newslatterButton: Selector('button.btn.btn-default.button.button-small'),
    }

    async typeText(inputArea: Selector, text: string) {

        await t.typeText(inputArea, text)
    }

    async clickButton(buttonSelector: Selector) {

        await t.click(buttonSelector);
    }

}