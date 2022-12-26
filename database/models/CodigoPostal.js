module.exports = (sequelize, dataTypes) => {
    let alias = 'Codigopostal';
    let cols = {
        idCodPost: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        barrio: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        comuna: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        cp: {
            type: dataTypes.INTEGER,
            allowNull: false
        }

    };
    let config = {
        timestamps: false,
        tableName: 'codigopostal',
        freezeTableName: true
    }
    const CodigoPostal = sequelize.define(alias, cols, config);

    return CodigoPostal
};