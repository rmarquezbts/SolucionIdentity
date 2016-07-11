Ext.define('app.view.componente.ComboClientes', {
    extend: 'Ext.form.field.ComboBox',

    xtype: 'comboclientes',

    initComponent: function() {

        Ext.apply(this, {

            store: Ext.create('app.store.clientes.StoreClientes'),
            queryMode: 'remote',
            displayField: 'fullName',
            valueField: 'id',
            triggerAction: 'all'

        });

        this.callParent();

    }

});