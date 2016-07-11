Ext.define('app.view.login.WindowLoginController', {
    extend: 'Ext.app.ViewController',
    alias : 'controller.windowlogincontroller',

    doLogin: function() {
        var form              = this.lookupReference('formulariologin');
        var formValues        = form.getValues();
        formValues.grant_type = 'password';

        Ext.Ajax.request({
            url    : '../oauth/token',
            params : this.htmlEntities(formValues),
            scope  : this,
            success: this.doSuccess,

            failure: function(response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        });

    },

    doSuccess: function(response, opts) {
        var obj = Ext.decode(response.responseText);
        Ext.log('Login Exitoso');

        sessionStorage.access_token = 'Bearer ' + obj.access_token;
        var grid                    = Ext.ComponentQuery.query('gridpanelclientes')[0];

        Ext.Ajax.setDefaultHeaders({
            'Authorization': sessionStorage.access_token
        });

        grid.getStore().load();
        this.getView().close();

    },

    htmlEntities: function(str) {
        var valScape = '';
        var valores  = '';

        var HTML_ESCAPE = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            '/': '&#x2F;',
            '`': '&#x60;'
        };

        Ext.Object.each(str, function(key, value) {
            valScape = (value + '').replace(/[&<>"'\/`]/g, function(match) {
                return HTML_ESCAPE[match];
            });
            valores += key + '=' + valScape + '&';
        });

        return encodeURI(valores.slice(0, -1));
    }

});