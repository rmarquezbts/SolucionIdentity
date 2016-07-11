Ext.define('app.view.clientes.form.FormaAsignaClaims', {
        extend: 'Ext.form.Panel',

        xtype:       'formaasignaclaims',
        bodyPadding: 10,

        initComponent: function () {

            Ext.apply(this, {
                fieldDefaults: {
                    anchor:     '100%',
                    labelWidth: 70,
                    align:      'right',
                    labelAlign: 'right',
                    msgTarget:  'under'
                },

                items: [{
                    xtype: 'textfield',
                    fieldLabel: 'TIPO'
                },{
                    xtype: 'textfield',
                    fieldLabel: 'VALOR'
                }]

            });

            this.callParent(); // Hacer llamada despues de configs
        },

        doSubmit: function(win) {

            var idUsuario = win.idUsuario;
            var url = '../api/accounts/user/' + idUsuario + '/assignclaims';

            Ext.Ajax.request({
                method: 'PUT',
                url: url,
                headers : {
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json'
                },
                scope: this,
                success: function(response) {

                    this.fireEvent('claimAsignado');
                    win.close();

                },
                failure: function(form, result) {
                    Ext.Msg.alert('Autorizacion', 'Acceso no autorizado a:<br><br>' + '[<b>' + url + '</b>]');
                }
            });

        },

        isValid: function()  {
            return this.getForm().isValid();
        }

    }
);