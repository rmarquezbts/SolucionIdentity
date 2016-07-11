Ext.define('app.view.componente.ComboRoles', {
    extend: 'Ext.form.field.ComboBox',

    xtype: 'comboroles',
    reference: 'comborolesref',

    initComponent: function() {

        var store = Ext.create('app.store.clientes.StoreRoles');
        Ext.apply(this, {

            store: store,
            queryMode: 'remote',
            displayField: 'name',
            valueField: 'id'

        });

        this.callParent();

    }

});