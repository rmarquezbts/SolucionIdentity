/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'app',

    extend: 'app.Application',

    requires: [
        'app.view.main.Main',
        'app.view.login.WindowLogin',
        'app.view.login.WindowLoginController',
        'app.view.clientes.PanelClientes',
        'app.view.panelclientes.PanelClientesController',
        'app.view.clientes.form.FormaClientes',
        'app.view.clientes.grid.GridPanelClientes',
        'app.store.clientes.StoreClientes',
        'app.view.componente.ComboClientes',
        'app.model.clientes.ModeloClientes',
        'app.view.comun.ModalWindow',
        'app.view.comun.StatusBarWindow',
        'app.view.comun.FormWindow',
        'app.view.login.WindowLoginModel',
        'app.view.clientes.form.FormaRoles',
        'app.view.clientes.form.FormaAsignaRoles',
        'app.view.componente.ComboRoles',
        'app.store.clientes.StoreRoles',
        'app.model.clientes.ModeloRoles',
        'app.view.clientes.form.FormaAsignaClaims',
        'app.view.clientes.grid.GridPanelClaims',
        'app.store.clientes.StoreClaims',
        'app.model.clientes.ModeloClaims'

    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: 'app.view.main.Main'
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to app.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
