Ext.define('app.view.clientes.form.FormaRoles', {
        extend: 'Ext.form.Panel',
        //controller: 'panelclientescontroller',

        xtype:       'formaroles',
        bodyPadding: 10,
        reference: 'formatest',
        itemId: 'formatest',

        //title: 'Forma de clientes', // Valor establecido como defecto

        initComponent: function () {

            Ext.apply(this, {
                fieldDefaults: { // Establecer defaults para los hijos de la forma, para no ir 1 por 1 a asignarle estos
                            // configs a los hijos
                    allowBlank: false,
                    anchor:     '100%',
                    labelWidth: 70,
                    align:      'right',
                    labelAlign: 'right',
                    msgTarget:  'under'
                }, // aplica a todos los campos de n-generaciones de hijos

                /*defaults: { // Establecer defaults para los hijos de la forma, para no ir 1 por 1 a asignarle estos
                    // configs a los hijos
                    allowBlank: false,
                    anchor:     '100%',
                    labelWidth: 70,
                    align:      'right',
                    labelAlign: 'right',
                    msgTarget:  'under'
                },// aplica solo a hijos directos, independiente del tipo de componente*/

                //title: 'Forma de clientes', //Dentro de aqui no se podra sobreescribir, esto no es defecto

                defaultType: 'textfield',

                items: [{
                    xtype: 'textfield',
                    fieldLabel: 'NOMBRE ROL',
                    name: 'Name'
                }]

            });

            this.callParent(); // Hacer llamada despues de configs
        },

        doSubmit: function(win) {

            var valores = Ext.encode(this.getForm().getValues());
            var url = '../api/roles/create';

            Ext.Ajax.request({
                url: url,
                headers : {
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json',
                    'odata': 'verbose'
                },
                scope: this,
                jsonData: valores,
                success: function(response) {
                    this.fireEvent('rolCreado');
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