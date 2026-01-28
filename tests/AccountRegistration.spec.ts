import {test} from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';
test.describe('Account Registration Tests',()=>{
    let registrationPage:RegistrationPage;
    test.beforeEach(async({page})=>{
        registrationPage=new RegistrationPage(page);
        await registrationPage.UserCreateAccount();
    });
});