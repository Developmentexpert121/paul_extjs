Ext.define('JanviewPro.view.main.MainView', {
    extend: 'Ext.Container',
    xtype: 'mainview',
    controller: 'mainviewcontroller',
    viewModel: {
        type: 'mainviewmodel'
    },
    requires: [
    'Ext.layout.Fit'
    ],
    layout: 'fit',
    items: [
        // { xtype: 'navview',    reference: 'navview',    docked: 'left',   bind: {width:  '{navview_width}'}, listeners: { select: "onMenuViewSelectionChange"} },
        // { xtype: 'headerview', reference: 'headerview', docked: 'top',    bind: {height: '{headerview_height}'} },
        // { xtype: 'footerview', reference: 'footerview', docked: 'bottom', bind: {height: '{footerview_height}'} },
      //  { xtype: 'centerview', reference: 'centerview' },
       
        { xtype: 'customerFullFillmentForm',reference: 'customerFullFillmentForm' , docked: 'left',   bind: {width: '100%'}, listeners: { select: "onMenuViewSelectionChange"}},
       // { xtype: 'detailview', reference: 'detailview', docked: 'right',  bind: {width:  '{detailview_width}'}  },
    ]
});
