Ext.define('app.view.clientes.grid.GridPanelClientes', {
    extend: 'Ext.grid.Panel',

    xtype: 'gridpanelclientes',
    reference: 'gridpanelclientesref',
    token: undefined,
    initComponent: function() {

        Ext.apply(this, {
            scope: this,
            title: 'Grid Clientes',
            bodyPadding: 10,
            store: Ext.create('app.store.clientes.StoreClientes'),
            columns: [
                { xtype: 'rownumberer'},
                { text: 'USUARIO', dataIndex: 'userName', flex: 1 },
                { text: 'NOMBRE COMPLETO', dataIndex: 'fullName', flex: 1 },
                { text: 'CORREO', dataIndex: 'email', flex: 1 },
                { text: 'PHONE', dataIndex: 'phoneNumber', flex: 1 },
                { text: 'FECHA INGRESO', dataIndex: 'joinDate', flex: 1 },
                { text: 'ROL', flex: 1,
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        return record.rolesToString();
                    }
                },
                {
                    xtype:'actioncolumn',
                    flex: 0.35,
                    items: [{
                        icon: 'resources/iconos/iconos32/rol.png',
                        tooltip: 'Asiganr Rol',
                        handler: function(grid, rowIndex, colIndex) {
                            var idUsuario = grid.getStore().getAt(rowIndex).id;
                            var formaAsignar = Ext.create('app.view.clientes.form.FormaAsignaRoles');
                            var formaWin = Ext.create('app.view.comun.FormWindow', {
                                scope: this,
                                title: 'Asignar Rol a Usuario',
                                width: 400,
                                height: 250,
                                items: formaAsignar,
                                txtOk: 'Asignar',
                                textodefecto: 'Forma Asigna Roles Listo!',
                                idUsuario: idUsuario
                            });
                            formaWin.show();
                        }
                    },{
                        icon: 'resources/iconos/iconos32/claims.png',
                        tooltip: 'Asiganr Claims',
                        handler: function(grid, rowIndex, colIndex) {
                            var idUsuario = grid.getStore().getAt(rowIndex).id;
                            var formaAsignar = Ext.create('app.view.clientes.form.FormaAsignaClaims');
                            var formaWin = Ext.create('app.view.comun.FormWindow', {
                                scope: this,
                                title: 'Asignar Claim a Usuario',
                                width: 400,
                                height: 250,
                                items: formaAsignar,
                                txtOk: 'Asignar',
                                textodefecto: 'Forma Asigna Claims Listo!',
                                idUsuario: idUsuario
                            });
                            formaWin.show();
                        }
                    },{
                        icon: 'resources/iconos/iconos32/delete.png',
                        tooltip: 'Eliminar Usuario',
                        handler: function(grid, rowIndex, colIndex) {
                            var store = grid.getStore();
                            var rec = store.getAt(rowIndex);

                            Ext.Msg.confirm('Eliminar', 'Esta seguro de querer eliminar a ' + rec.data.fullName + '?', function(res) {
                                if (res == 'yes') {

                                    var idUsuario = grid.getStore().getAt(rowIndex).id;
                                    var url = '../api/accounts/user/' + idUsuario + '/DeleteUser';
                                    Ext.Ajax.request({
                                        method: 'POST',
                                        url: url,
                                        headers : {
                                            'Content-Type' : 'application/json',
                                            'Accept' : 'application/json'
                                        },
                                        scope: this,
                                        success: function(response) {
                                            store.remove(rec);
                                        },
                                        failure: function(form, result) {
                                            console.warn('Fallo Submit');
                                        }
                                    });

                                }
                            });

                        }
                    }]
                }
            ]

        });

        this.callParent();

    }
});