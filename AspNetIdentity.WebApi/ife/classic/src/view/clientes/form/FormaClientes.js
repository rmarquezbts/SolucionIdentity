Ext.define('app.view.clientes.form.FormaClientes', {
        extend: 'Ext.form.Panel',

        xtype:       'formaclientes',
        bodyPadding: 10,
        reference: 'formatest',
        itemId: 'formatest',
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

                defaultType: 'textfield',

                items: [{
                    xtype: 'textfield',
                    fieldLabel: 'CORREO',
                    name: 'Email',
                    vtype: 'email'
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'TELEFONO',
                    name: 'PhoneNumber',
                    vtype: 'phone'
                },{
                    xtype:      'textfield',
                    fieldLabel: 'USUARIO',
                    name: 'UserName'
                }, {
                    xtype:      'textfield',
                    fieldLabel: 'PASSWORD',
                    name: 'Password',
                    inputType: 'password'
                }, {
                    xtype:      'textfield',
                    fieldLabel: 'CONFIRMAR PASSWORD',
                    name: 'ConfirmPassword',
                    inputType: 'password'
                }, {
                    xtype:      'textfield',
                    fieldLabel: 'NOMBRE',
                    name: 'FirstName'
                }, {
                    xtype:      'textfield',
                    fieldLabel: 'APELLIDO',
                    name: 'LastName'
                }]

            });

            this.callParent(); // Hacer llamada despues de configs
        },

        doSubmit: function(win) {

            var valores = Ext.encode(this.getForm().getValues());
            var url = '../api/accounts/create';

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

                    this.fireEvent('usuarioCreado');
                    var resp = Ext.decode(response.responseText);
                    console.info(resp.fullName);
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