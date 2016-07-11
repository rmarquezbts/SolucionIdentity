/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('app.Application', {
    extend: 'Ext.app.Application',
    
    name: 'app',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {

        Ext.define('Override.form.field.VTypes', {
            override: 'Ext.form.field.VTypes',

            phone: function(value) {
                return this.phoneRe.test(value);
            },
            phoneRe: /^(\d{3}[-]?){1,2}(\d{4})$/,
            phoneText: 'Número telefonico invalido. El formato debe ser 123-4567 o 123-456-7890 (guión opcional)',
            phoneMask: /[\d-]/
        });

        var wind = Ext.create('app.view.login.WindowLogin',{
            title:'Bienvenido Usuario'
        });
        wind.show();
        wind.lookupReference('txtusuario').focus();

    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
