module.exports = (sequelize, dataTypes) => {
    let alias = "Voucher";
    let cols = {
        idVouchers: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        voucher: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        valor: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        fecha: {
            type: dataTypes.DATE,
            allowNull: false,
        },
    };
    let config = {
        timestamps: false,
        tableName: "Vouchers",
        freezeTableName: true,
    };
    const voucher = sequelize.define(alias, cols, config);

    return voucher;
};
