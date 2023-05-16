Ext.define('JanviewPro.view.customers.CustomerFullFillmentFormViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.customerFullFillmentForm',
    
    onSaveClick: function(button) {
        var form = button.up('form'),
            values = form.getValues();
    },

    onCancelClick: function(button) {
        var form = button.up('form'),
        values =  form.setValues({
            franchiseeName: '',
            customerName: '',
            startDate: '',
            monthlyLoanPaymentAmount: '',
            numberOfMonths: '',
            fullfilmentLetter: '',
        });
    }
});
