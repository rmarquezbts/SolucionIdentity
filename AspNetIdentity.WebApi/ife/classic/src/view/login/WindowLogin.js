Ext.define('app.view.login.WindowLogin', {
    extend: 'app.view.comun.ModalWindow',
    controller: 'windowlogincontroller',
    viewModel: 'windowloginmodel',

    width: 300,
    height: 190,
    txtOk: 'Ingresar',

    items: {
        xtype: 'form',
        reference: 'formulariologin',

        items: [{
                    xtype: 'textfield',
                    reference: 'txtusuario',
                    fieldLabel: 'Usuario',
                    name: 'username',

                    bind: {
                        value: '{nombre}'
                    }
                },{
                    xtype: 'textfield',
                    reference: 'txtpassword',
                    fieldLabel: 'Password',
                    inputType: 'password',
                    name: 'password'
                }]

    },

    buttons: [{
        text: 'Ingresar',
        handler: 'doLogin',
        bind: {
            disabled: '{habilitar}'
        }
    }]

});