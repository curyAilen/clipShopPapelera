module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario';
    let cols = {
        idUsuarios: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        direccion: {
            type: dataTypes.STRING,
            allowNull: false

        },
        telefono: {
            type: dataTypes.INTEGER,
            allowNull: true

        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        rol: {
            type: dataTypes.STRING,
            allowNull: true,
            defaultValue: "user"
        }
    };
    let config = {
        timestamps: false,
        tableName: 'usuarios',
        freezeTableName: true
    }
    const Usuario = sequelize.define(alias, cols, config);


    return Usuario
};