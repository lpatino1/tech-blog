const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init({
    // Proper name of vendor for public display
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        }
    },
    
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
    // hooks:{
    //     beforeCreate:userObj=>{
    //         userObj.password = bcrypt.hashSync(userObj.password,8);
    //         return userObj;
    //     }
    // }
});

module.exports= Blog;