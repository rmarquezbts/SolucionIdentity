Ext.define('app.model.clientes.ModeloClientes', {
    extend: 'Ext.data.Model',

    xtype: 'modeloclientes',

    fields: [
        "url",
        "id",
        "userName",
        "fullName",
        "email",
        "emailConfirmed",
        "rol",
        "phoneNumber",
        "level",
        {
            name: 'joinDate',
            type: 'date',
            format: 'Y-m-d'
        }
    ],

    rolesToString: function() {
        var rolesArray = this.data.roles;
        var rolesString = '';
        if (rolesArray.length === 0) {
          rolesString = '';
        } else if (rolesArray.length === 1) {
            rolesString = this.data.roles[0];
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