Ext.define('app.store.clientes.StoreClientes', {
    extend: 'Ext.data.Store',

    model: 'app.model.clientes.ModeloClientes',

    proxy: {
        type: 'ajax',
        url: '../api/accounts/users',
        reader: {
            type: 'json'
        },
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    }

});