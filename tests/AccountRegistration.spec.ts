import {test} from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';
test.describe('Account Registration Tests',()=>{
    let registrationPage:RegistrationPage;
    test.beforeEach(async({page})=>{
        registrationPage=new RegistrationPage(page);
        await registrationPage.OpenRegistrationPage();
    });
    test('Verify Registration Page Title',async()=>{
        await registrationPage.VerifyRegistrationPageTitle();
    });
    test('Enter Registration Details',async()=>{
        await registrationPage.EnterRegistrationDetails();
        await registrationPage.VerifyRegistrationPageURL();
        await registrationPage.EnterAccountInformation();
        await registrationPage.EnterAddressInformation();
    });

});