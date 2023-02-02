module.exports = (sequelize, dataTypes) => {
    let alias = 'Email';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tableName: 'emails',
        freezeTableName: true
    };
    const Email = sequelize.define(alias, cols, config);

    return Email;
};