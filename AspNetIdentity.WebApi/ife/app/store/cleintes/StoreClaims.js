Ext.define('app.store.clientes.StoreClaims', {
    extend: 'Ext.data.Store',

    model: 'app.model.clientes.ModeloClaims',

    proxy: {
        type: 'ajax',
        url: '../api/claims',
        reader: {
            type: 'json'
        },
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    }

});