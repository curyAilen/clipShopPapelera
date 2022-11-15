module.exports = (sequelize, dataTypes) => {
    let alias = 'Banner'; 
    let cols = {
        idBanners: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },        
        banner: {
            type: dataTypes.STRING,
            allowNull: false
        }
        
    };
    let config = {
        timestamps: false,
        tableName: 'banners',
        freezeTableName:true
    }
    const Banner = sequelize.define(alias,cols,config);


    return Banner
};