module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario'; 
    let cols = {
        idUsuarios: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        nombre: {
            type: dataTypes.STRING(155),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(155),
            allowNull: false,
            unique: true
        },
        direccion: {
            type: dataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        telefono: {
            type: dataTypes.INTEGER,
            allowNull: true,
            unique: true
        },
        FKCodigoPostal:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        rol: {
            type: dataTypes.STRING,
            allowNull: false
        }


    };
    let config = {
        timestamps: false,
        tableName: 'usuarios',
        freezeTableName:true
    }
    const Usuario = sequelize.define(alias,cols,config);

    Usuario.associate = models => {
        Usuario.belongsTo(models.CodigoPostal, {
            as: 'codigoPostal',
            foreignKey: 'FKCodigoPostal'
        });

    };

    return Usuario
};