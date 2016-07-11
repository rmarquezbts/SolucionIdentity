/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('app.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {

        var panelClientes = Ext.create('app.view.clientes.PanelClientes');
        var formaClientes = Ext.create('app.view.comun.FormWindow', {
            width: 1024,
            height: 800,
            items: panelClientes,
            title: 'Buscar',
            autoShow: true,
            txtOk: 'Insertar Usuario',
            listeners: {
                guardado2: function(alguien, record) {

                    formaClientes.hide();
                    Ext.Msg.alert('Status', 'Usuario seleccionado: ' + record.data.nombre);

                }
            }
        });

    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            Ext.Msg.alert('Well', 'Ok!', Ext.emptyFn);
        }
    }
});
