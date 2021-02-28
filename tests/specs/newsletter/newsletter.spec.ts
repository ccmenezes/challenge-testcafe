import { Selector } from 'testcafe';
import BasePage from '../../page_objects/basePage';
import message from '../../data/CommonMessages';
import AlertLocators from '../../utils/AlertWebLocators'
const faker = require('../../faker');

fixture `Newslatter`
.page `http://automationpractice.com`

const page = new BasePage;
const alertLocator = new AlertLocators();

test('REG-011_001 | Fail to enroll in the newsletter', async t => {

    let nonexistentEmail = 'test@test.com';

    await page.typeText(page.newslatter.newslatterInput, nonexistentEmail);
    await page.clickButton(page.newslatter.newslatterButton);
    await t.expect(alertLocator.alertWebLocator.alertDanger.innerText).contains(message.registeredEmailMessage);
});

test('REG-011_002 | Successfully enroll in the newsletter', async t => {

    let email = faker.internet.email().toLowerCase(); 

    await page.typeText(page.newslatter.newslatterInput, email);
    await page.clickButton(page.newslatter.newslatterButton);
    await t.expect(alertLocator.alertWebLocator.alertSuccessRegistered.innerText).contains(message.RegisteresrEmailSuccessfullyMessage);
});
