namespace testprac.db;

using { cuid,Currency } from '@sap/cds/common';

using { testprac.common } from './common';

context master{
    entity employees: cuid {
        nameFirst : String(40);
        nameLast : String(40);
        sex : common.Gender;
        language : String(1);
        phoneNumber : common.PhoneNumber;
        email : common.Email;
        currency : Currency;
        salaryAmount: common.AmountT;
        accountNumber : String(30);
        bankId : String(40);
        bankName: String(64);
        
    }
}



