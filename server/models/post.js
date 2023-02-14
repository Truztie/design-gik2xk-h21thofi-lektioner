module.exports = (sequelize, DataTypes) => {
    return sequelize.define("post", {
        id: {
            type: DataTypes.INTEGER,
            primarykey: true,
            autoincrement: true
        }
    })
};