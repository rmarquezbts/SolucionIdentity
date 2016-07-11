Ext.define('app.view.clientes.grid.GridPanelClaims', {
    extend: 'Ext.grid.Panel',

    xtype: 'gridpanelclaims',
    reference: 'gridpanelclaimsref',
    initComponent: function() {

        var store = Ext.create('app.store.clientes.StoreClaims', {
            autoLoad: true
        });

        store.on('load', function(str, records, successful) {

        });

        Ext.apply(this, {
            scope: this,
            title: 'Grid Claims',
            bodyPadding: 10,
            store: store,
            columns: [
                { xtype: 'rownumberer'},
                { text: 'SUBJECT', dataIndex: 'subject', flex: 0.2 },
                { text: 'TYPE', dataIndex: 'type', flex: 1 },
                { text: 'VALUE', dataIndex: 'value', flex: 0.5 }
            ]
        });

        this.callParent();

    },

    doSubmit: function(win) {
        win.close();
    },

    isValid: function()  {
        return true;
    }
});