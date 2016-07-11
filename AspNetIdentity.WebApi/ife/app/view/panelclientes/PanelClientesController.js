Ext.define('app.view.panelclientes.PanelClientesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.panelclientescontroller',

    agregarTab: function() {
        var view = this.getView();

        var tabx = view.down('tabpanel');
        var panel = Ext.create('Ext.Panel', {
            title: 'Nuevo ' + tabx.kilo++,
            closable: true,
            items: [{xtype: 'gridpanelclientes'}]
        });

        panel.on({
            close: function() {
                alert('cerrado');
            }
        });

        tabx.add(panel);
        tabx.setActiveTab(panel);
    },

    agregarCliente: function() {

        var forma = Ext.create('app.view.clientes.form.FormaClientes');
        var panel = this;
        this.panelAgregar = Ext.create('app.view.comun.FormWindow', {
            scope: this,
            title: 'Agregar Usuario',
            width: 400,
            height: 500,
            items: forma,
            txtOk: 'Agregar',
            textodefecto: 'Forma Clientes Listo!',
            listeners: {
                avisoFormaCerrada: function() {
                    var grid = panel.lookupReference('gridpanelclientesref');
                    grid.getStore().reload();
                    //console.log('Escuche que se cerro la forma, este es el grid? ' , grid);
                }
            }
        });
        forma.on({
            scope: this,
            guardado: function(forma, record, b) {
                this.panelAgregar.hide();
            },

            fielderrorchange: function( forma , field , error) {
                console.info('fielderrorchange');
            },

            fieldvaliditychange: function(forma, campo, msgError) {
                console.info('fieldvaliditychange: ' + msgError);
            },

            validitychange: function(forma) {
                console.info('validitychange');
            }

        });
        this.panelAgregar.show();

    },

    agregarRol: function() {

        var forma = Ext.create('app.view.clientes.form.FormaRoles');
        var panel = this;

        this.panelAgregar = Ext.create('app.view.comun.FormWindow', {
            scope: this,
            title: 'Agregar un nuevo rol',
            width: 400,
            height: 250,
            items: forma,
            txtOk: 'Agregar',
            textodefecto: 'Forma Roles Listo!',
            listeners: {
                /*avisoFormaCerrada: function() {
                    var grid = panel.lookupReference('gridpanelclientesref');
                    grid.getStore().reload();
                    console.log('Escuche que se cerro la forma, este es el grid? ' , grid);
                }*/
            }
        });

        forma.on({
            scope: this,
            guardado: function(forma, record, b) {
                this.panelAgregar.hide();
            },

            fielderrorchange: function( forma , field , error) {
                console.info('fielderrorchange');
            },

            fieldvaliditychange: function(forma, campo, msgError) {
                console.info('fieldvaliditychange: ' + msgError);
            },

            validitychange: function(forma) {
                console.info('validitychange');
            }

        });

        this.panelAgregar.show();

    },

    printName: function(grid , record) {

        var sur = this.lookupReference('panel_sur');
        sur.down('displayfield').setValue(
        '<h1 style="color: blue;">' + '&nbsp;&nbsp;' +
            record.data.userName + ' - ' + record.data.fullName + ' - Rol: ' + this.rolesToString(record.data.roles) +
        '</h1>'
        );
    },

    refrescarGrid: function() {
        var grid = this.lookupReference('gridpanelclientesref');
        grid.getStore().reload();
    },

    muestraComboRoles: function() {
        var formaAsignar = Ext.create('app.view.clientes.form.FormaAsignaRoles');
        var formaWin = Ext.create('app.view.comun.FormWindow', {
            scope: this,
            title: 'Combo de Roles',
            width: 400,
            height: 250,
            items: formaAsignar,
            txtOk: 'Whatever',
            textodefecto: 'Forma Asigna Roles Listo!'
        });

        formaWin.show();
    },

    muestraClaims: function() {
        var gridClaims = Ext.create('app.view.clientes.grid.GridPanelClaims');
        this.panelGridClaims = Ext.create('app.view.comun.FormWindow', {
            scope: this,
            title: 'Claims de Usuario',
            width: 960,
            height: 600,
            items: gridClaims,
            txtOk: 'Okas',
            textodefecto: 'Claims Ok!'
        });
        this.panelGridClaims.show();
    },

    doLogout: function() {

        Ext.Ajax.setDefaultHeaders({
            'Authorization': undefined
        });

        sessionStorage.access_token = undefined;

        var grid = this.lookupReference('gridpanelclientesref');
        grid.getStore().removeAll();

        Ext.create('app.view.login.WindowLogin',{
            title:'Bienvenido Usuario',
            autoShow: true
        });

    },

    rolesToString: function(roles) {
        var rolesArray = roles;
        var rolesString = '';
        if (rolesArray.length === 0) {
            rolesString = '<i>-rol no asignado-</i>';
        } else if (rolesArray.length === 1) {
            rolesString = rolesArray[0];
        } else if (rolesArray.length > 1) {
            var k = 0;
            Ext.each(rolesArray, function (ra) {
                k++;
                if (k === 1) {
                    rolesString = ra;
                } else {
                    rolesString = rolesString + ', ' + ra;
                }
            });
        }
        return rolesString;
    }

});