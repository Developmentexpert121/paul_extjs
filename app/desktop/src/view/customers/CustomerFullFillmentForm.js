Ext.define('JanviewPro.view.customers.CustomerFullFillmentForm', {
    extend: 'Ext.form.Panel',
     xtype: 'customerFullFillmentForm',
     requires: ['JanviewPro.view.customers.CustomerFullFillmentFormViewController'],
     controller: {
         xclass: 'JanviewPro.view.customers.CustomerFullFillmentFormViewController'
    },
    cls: 'customerView',
    model: 'JanviewPro.model.UnitFranchiseModel',
    title: 'Franchise Account Transfer',
    bodyPadding: 10,
    width: '100%',
    defaultType: 'textfield',
    xtype:'form',
    formId:'customerFullFillmentForm',
    itemId:'formid',
    layout: {
        type: 'hbox',
        align: 'middle'
    },
    fieldDefaults:
                    {
                        labelAlign: 'top',
                        labelStyle: 'font-weight:bold'
                    },
    items: [
     {
        xtype: 'textareafield',
        label: 'Number of months to pay off the loan',
        name: 'numberOfMonths',
        allowBlank: false,
        required: true,
        width: '50%',
    }, 
    {
        xtype: 'filefield',
        label: 'Choose fullfilment letter',
        name: 'fullfilmentLetter',
        allowBlank: false,
        store: ['Letter A', 'Letter B', 'Letter C'],
        queryMode: 'local',
        emptyText: 'Select a letter',
        required: true,
        width: '50%',
    },
    ],
 });

 
