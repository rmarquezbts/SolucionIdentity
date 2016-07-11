Ext.define('app.view.login.WindowLoginModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.windowloginmodel',

    data: {
        name: ''
    },

    formulas: {

        habilitar: function(get) {
            var d = get('username');
            console.log(d);

            if (Ext.isEmpty(d))
            return true;
            return false;
        }
    }


});