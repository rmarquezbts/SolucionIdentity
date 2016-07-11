Ext.define('app.view.clientes.PanelClientes', {
    extend: 'Ext.panel.Panel',
    controller: 'panelclientescontroller',

    xtype: 'panelclientes',

    layout: 'border',


    tbar: [{
        text: 'Agregar Usuario',
        handler: 'agregarCliente'
    },{
        text:'Agregar Rol',
        handler: 'agregarRol'
    },{
        text: 'Mostrar Claims',
        handler: 'muestraClaims'
    },'->', {
        text: 'Refrescar Grid',
        handler: 'refrescarGrid'
    },{
        text: 'Logout',
        handler: 'doLogout'
    }],

    items: [{
        kilo: 1,
        xtype: 'tabpanel',
        region:'center',

        items: [{
            title: 'Administrador',
            xtype: 'gridpanelclientes',
            listeners:
            {
                itemclick: 'printName'
            }

        }],

        bbar: [{
            text: 'Agregar Tab',
            handler: 'agregarTab'
        }]
        },{
            xtype: 'panel',
            title: 'Sur',
            region: 'south',
            height: 200,
            reference: 'panel_sur',
            scope: this,

            items: [
                { xtype: 'displayfield' },
                {
                    xtype: 'button',
                    text: '<h1>Por Roles</h1>',
                    textAlign: 'center',
                    width: 224,
                    height: 80,
                    scope: this,

                    handler: function() {
                        var url = '../api/orders/PorRoles';
                        Ext.Ajax.request({
                            url: url,
                            method: 'POST',
                            scope: this,
                            success: function() {
                                var authStatus = Ext.ComponentQuery.query('#authstatus')[0];
                                authStatus.setValue(
                                    '<h1 style="color: green;">' + '&nbsp;&nbsp;' +
                                    'Acceso autorizado a:<br><br>' + '[<b>' + url + '</b>]' +
                                    '</h1>'
                                );

                            },
                            failure: function() {
                                var authStatus = Ext.ComponentQuery.query('#authstatus')[0];
                                authStatus.setValue(
                                    '<h1 style="color: red;">' + '&nbsp;&nbsp;' +
                                    'Acceso no autorizado a:<br><br>' + '[<b>' + url + '</b>]' +
                                    '</h1>'
                                );

                            }
                        });
                    }
                },
                {
                    xtype: 'button',
                    text: '<h1>Por Usuario</h1>',
                    textAlign: 'center',
                    width: 224,
                    height: 80,
                    handler: function() {
                        var url = '../api/orders/PorUsuario';
                        Ext.Ajax.request({
                            url: url,
                            method: 'POST',
                            scope: this,
                            success: function() {
                                var authStatus = Ext.ComponentQuery.query('#authstatus')[0];
                                authStatus.setValue(
                                    '<h1 style="color: green;">' + '&nbsp;&nbsp;' +
                                    'Acceso autorizado a:<br><br>' + '[<b>' + url + '</b>]' +
                                    '</h1>'
                                );
                            },
                            failure: function() {
                                var authStatus = Ext.ComponentQuery.query('#authstatus')[0];
                                authStatus.setValue(
                                    '<h1 style="color: red;">' + '&nbsp;&nbsp;' +
                                    'Acceso no autorizado a:<br><br>' + '[<b>' + url + '</b>]' +
                                    '</h1>'
                                );

                            }
                        });
                    }
                },
                {
                    xtype: 'button',
                    text: '<h1>Claims/Roles<br>Dinamicos<br>Oficina Aut.</h1>',
                    textAlign: 'center',
                    width: 224,
                    height: 80,
                    handler: function() {
                        var url = '../api/orders/OficinaAutorizada';
                        Ext.Ajax.request({
                            url: url,
                            method: 'POST',
                            scope: this,
                            success: function() {
                                var authStatus = Ext.ComponentQuery.query('#authstatus')[0];
                                authStatus.setValue(
                                    '<h1 style="color: green;">' + '&nbsp;&nbsp;' +
                                    'Acceso autorizado a:<br><br>' + '[<b>' + url + '</b>]' +
                                    '</h1>'
                                );

                            },
                            failure: function() {
                                var authStatus = Ext.ComponentQuery.query('#authstatus')[0];
                                authStatus.setValue(
                                    '<h1 style="color: red;">' + '&nbsp;&nbsp;' +
                                    'Acceso no autorizado a:<br><br>' + '[<b>' + url + '</b>]' +
                                    '</h1>'
                                );

                            }
                        });
                    }
                },
                {
                    xtype: 'button',
                    text: '<h1>Autorizacion<br>Custom por Claims<br>de Municipio</h1>',
                    textAlign: 'center',
                    width: 224,
                    height: 80,
                    handler: function() {
                        var url = '../api/orders/CustomPorMunicipio';
                        Ext.Ajax.request({
                            url: url,
                            method: 'POST',
                            scope: this,
                            success: function() {
                                var authStatus = Ext.ComponentQuery.query('#authstatus')[0];
                                authStatus.setValue(
                                    '<h1 style="color: green;">' + '&nbsp;&nbsp;' +
                                    'Acceso autorizado a:<br><br>' + '[<b>' + url + '</b>]' +
                                    '</h1>'
                                );

                            },
                            failure: function() {
                                var authStatus = Ext.ComponentQuery.query('#authstatus')[0];
                                authStatus.setValue(
                                    '<h1 style="color: red;">' + '&nbsp;&nbsp;' +
                                    'Acceso no autorizado a:<br><br>' + '[<b>' + url + '</b>]' +
                                    '</h1>'
                                );

                            }
                        });
                    }
                },
                {
                    xtype: 'displayfield',
                    itemId: 'authstatus'
                }
            ]

        }
    ],

    html: 'Cuerpo. Panel de clientes',

    doSubmit: function()  {
        var rec = this.lookupReference('gridpanelclientesref').getSelectionModel().getSelection();
        this.fireEvent('guardado', this, rec[0]);
    },

    isValid: function()  {

        var rec = this.lookupReference('gridpanelclientesref').getSelectionModel().getSelection();

        if (rec.length === 0) {
            alert('selecciona una fila');
            return false;
        } else {
            return true;
        }
    }


});