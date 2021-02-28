import { Selector } from "testcafe";

export default class AlertLocators {

    public alertWebLocator = {
        alertDanger : Selector('p.alert.alert-danger'),
        alertSuccessRegistered: Selector('p.alert.alert-success')
    }

}