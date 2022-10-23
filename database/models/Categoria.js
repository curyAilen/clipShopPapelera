module.exports = (sequelize, dataTypes) => {
    let alias = 'Categoria'; 
    let cols = {
        idCategorias: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        nombreCategoria: {
            type: dataTypes.STRING(155),
            allowNull: false
        }        
        
    };
    let config = {
        timestamps: false,
        tableName: 'categorias',
        freezeTableName:true
    }
    const Categoria = sequelize.define(alias,cols,config);

    
    Categoria.associate = models => {
        Categoria.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'FKidCategoria'
        });

    };


    return Categoria
};