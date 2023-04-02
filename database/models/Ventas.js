const db = require(".");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Ventas';
    let cols = {
        idVentas: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        idProductos: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        idUsuarios: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        importe: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        cantidad: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        pedidoNum: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        fecha: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        estado: {
            type: dataTypes.STRING(100),
            allowNull: false,
        }
    };
    let config = {
        timestamps: false,
        tableName: 'ventas',
        freezeTableName: true
    }
    const Ventas = sequelize.define(alias, cols, config);
    
    return Ventas
};