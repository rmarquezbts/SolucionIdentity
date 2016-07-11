Ext.define('app.view.comun.StatusBarWindow', {
    extend: 'app.view.comun.ModalWindow',

    xtype: 'statusbarwindow',

    textodefecto: 'Forma Lista!',

    initComponent: function() {

        this.mibbar = Ext.create('Ext.ux.StatusBar', {

            xtype:          'statusbar',
            defaultText:    this.textodefecto,
            defaultIconCls: 'default-icon',

            // values to set initially:
            text:    'Ready',
            iconCls: 'ready-icon',

            // any standard Toolbar items:
            items: [{
                text: 'A Button'
            }, '-', 'Plain Text'],

            reference: 'statusbarforma'

        });

        this.bbar = this.mibbar;

        this.callParent();

    },

    errorCustom: function(msg) {
        this.mibbar.setStatus({
            text: msg,
            clear: true
        });
    }

});