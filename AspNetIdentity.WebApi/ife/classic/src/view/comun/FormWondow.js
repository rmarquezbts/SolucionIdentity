Ext.define('app.view.comun.FormWindow', {
    extend: 'app.view.comun.StatusBarWindow',

    xtype: 'formwindow',

    txtOk: 'defalutOk',

    onOk: function() {
        var cosa = this.child('panel');
        if (cosa.isValid()) {
            cosa.doSubmit(this);
        }
    },

    initComponent: function() {

        Ext.apply(this, {
            buttons: this.getBotones()
        });

        this.callParent();

        this.child('panel').on({
            scope: this,

            guardado: function(panelcosa, rec) {
                this.fireEvent('guardado2', this, rec);
            },

            fielderrorchange: function(forma , field , errorm) {
                this.errorCustom(errorm);
            },

            usuarioCreado: function() {
                Ext.log('Alguien dijo usuarioCreado >_>');
                this.fireEvent('avisoFormaCerrada');
            }

        });

    },

    getBotones: function() {
        return [{
            text: this.txtOk,
            scope: this,
            handler: this.onOk
        },{
            text: 'Cancelar',
            scope: this,
            handler: function() {
                this.close();
            }
        }];
    }

});