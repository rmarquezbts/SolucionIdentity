Ext.define('app.view.clientes.form.FormaAsignaRoles', {
        extend: 'Ext.form.Panel',

        xtype:       'formaasignaroles',
        bodyPadding: 10,

        initComponent: function () {

            var comboRoles = Ext.create('app.view.componente.ComboRoles', {
                fieldLabel: 'ROLES',
                name: 'Name'
            });

            Ext.apply(this, {
                fieldDefaults: { // Establecer defaults para los hijos de la forma, para no ir 1 por 1 a asignarle estos
                            // configs a los hijos
                    //allowBlank: false,
                    anchor:     '100%',
                    labelWidth: 70,
                    align:      'right',
                    labelAlign: 'right',
                    msgTarget:  'under'
                },

                items: comboRoles

            });

            this.callParent(); // Hacer llamada despues de configs
        },

        doSubmit: function(win) {

            var valores = this.getForm().getValues();
            var nombreRol = valores.Name;
            var idUsuario = win.idUsuario;
            var url = '../api/accounts/user/' + idUsuario + '/roles';

            var arrayRoles = [nombreRol];

            var val = {
                rolesToAssign: arrayRoles
            };

            Ext.Ajax.request({
                method: 'POST',
                url: url,
                headers : {
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json'
                },
                scope: this,
                jsonData: val,
                success: function(response) {

                    this.fireEvent('rolAsignado');
                    var grid = Ext.ComponentQuery.query('gridpanelclientes')[0];
                    grid.getStore().load();
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