Ext.define('JanviewPro.model.UnitFranchiseModel', {
    extend: 'Ext.data.Model',

    requires: ['Ext.data.field.String', 'Ext.data.field.Number'],

    fields: [
        // {
        //     type: 'int',
        //     name: 'id'
        // },
        // {
        //     type: 'int',
        //     name: 'pid'
        // },
        // {
        //     // Label "Franchise  Name*", this will be a combom box
        //     type: 'int',
        //     name: 'uid'
        // },
        {
            // Label "Customer  Name*", this will be a combom box
            type: 'string',
            name: 'franchiseeName'
        },
        // {
        //     type: 'string',
        //     name: 'firstname'
        // },
        // {
        //     type: 'string',
        //     name: 'lastname'
        // },
        // {
        //     type: 'string',
        //     name: 'email'
        // },
        // {
        //     type: 'string',
        //     name: 'mobilephone'
        // },
        // {
        //     type: 'string',
        //     name: 'officephone'
        // },
        // {
        //     type: 'string',
        //     name: 'streetaddress'
        // },
        // {
        //     type: 'string',
        //     name: 'city'
        // },
        // {
        //     type: 'string',
        //     name: 'st'
        // },
        // {
        //     type: 'string',
        //     name: 'zip'
        // },
        // {
        //     type: 'string',
        //     name: 'ein'
        // },
        // {
        //     type: 'string',
        //     name: 'planpurchased'
        // },
        // {
        //     type: 'number',
        //     name: 'initialinvestment'
        // },
        // {
        //     type: 'number',
        //     name: 'amountfinanced'
        // },
        // {
        //     // The Monthly loan payment*
        //     type: 'number',
        //     name: 'monthlypymt'
        // },
        // {
        //     //  Number of months to pay off the loan*
        //     type: 'int',
        //     name: 'monthsfinanced'
        // },
        // {
        //     type: 'string',
        //     name: 'nameofbank'
        // },
        // {
        //     type: 'string',
        //     name: 'routingnumber'
        // },
        // {
        //     type: 'string',
        //     name: 'accountnnumber'
        // },
        // {
        //     type: 'string',
        //     name: 'notes'
        // },
        // {
        //     type: 'date',
        //     name: 'trainingdate'
        // },
        // {
        //     // This is the Start Date and is a date picker.
        //     type: 'date',
        //     name: 'startDate'
        // },
        // {
        //     type: 'string',
        //     name: 'signature'
        // },
        // {
        //     type: 'string',
        //     name: 'ufagreement'
        // },
        // {
        //     type: 'string',
        //     name: 'insuranceform'
        // },
        // {
        //     type: 'string',
        //     name: 'wnineform',
        //     buttonText: 'Choose File'
        // },
        // {
        //     type: 'string',
        //     name: 'directdepositform'
        // },
        // {
        //     // This the Contract fufillment letter*  and it is a button to upload a file
        //     type: 'string',
        //     name: 'fulFillmentLetter',
        //     buttonText: 'Choose File'
        // },
        // {
        //     type: 'int',
        //     name: 'monthsremaining'
        // },
        // {
        //     type: 'number',
        //     name: 'currentbalance'
        // },
        // {
        //     type: 'string',
        //     name: 'cld_account'
        // }
    ],
    // proxy: {
    //     type: 'dynamicajax',
    //     url: '/jvpupdater/units',
    //     api: {
    //         update: () => `/jvpupdater/units/`,
    //         create: () => {
    //             return `/jvpupdater/units/`;
    //         },
    //         read: () => {
    //             const aId = JanviewPro.Storage.getItem('aId');
    //             return `/jvp/${aId}/units/`;
    //         }
    //     },
    //     reader: {
    //         type: 'json'
    //     },
    //     writer: {
    //         type: 'json',
    //         writeAllFields: true,
    //         writeRecordId: 'update-only'
    //     }
    // }
});

// this.lookup('file').getFiles();

// const formData = new FormData();

// formData.append('file1', theBlob);
// formData.append('file2', theOtherBlob);

// formData.append('entity', JSONstringify(theRest));

// Ext.Ajax.request({
//     rawData: formData
// });
