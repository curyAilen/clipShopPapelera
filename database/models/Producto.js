module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto'; 
    let cols = {
            idProductos: {
                type: dataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },        
            nombre: {
                type: dataTypes.STRING(255),
                allowNull: false, 
                validate: {min: 3}
            },
            FKidCategoria: {
                type: dataTypes.INTEGER.UNSIGNED,
                allowNull: false
            },
            precio: {
                type: dataTypes.DECIMAL(12,2),
                allowNull: false
            },
            descripcion: {
                type: dataTypes.TEXT,
                allowNull: true
            },       
            imagen: {
                type: dataTypes.STRING,
                allowNull: false
            },
            oferta: {
                type: dataTypes.INTEGER,
                allowNull: true
            },
            color: {
                type: dataTypes.STRING,
                allowNull: true
            },
            peso: {
                type: dataTypes.DECIMAL(12,2),
                allowNull: true
            },
            medida: {
                type: dataTypes.STRING,
                allowNull: true
            }
      
    };
    let config = {
        timestamps: false,
        tableName: 'productos',
        freezeTableName:true
    }
    const Producto = sequelize.define(alias,cols,config);

    
    Producto.associate = models => {
        Producto.belongsTo(models.Categoria, {
            as: 'categoria',
            foreignKey: 'FKidCategoria'
        });

    };

    return Producto
};