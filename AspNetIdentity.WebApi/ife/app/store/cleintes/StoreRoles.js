Ext.define('app.store.clientes.StoreRoles', {
    extend: 'Ext.data.Store',

    model: 'app.model.clientes.ModeloRoles',

    proxy: {
        type: 'ajax',
        url: '../api/roles',
        reader: {
            type: 'json'
        },
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    }

});