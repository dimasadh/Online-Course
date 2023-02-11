module.exports = (sequelize, Datatypes) => {
    const RefreshToken = sequelize.define('RefreshToken', {
        id: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        token: {
            type: Datatypes.TEXT,
            allowNull: false
        },
        user_id: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: Datatypes.DATE,
            field: 'created_at',
            allowNull: false
        },
        updatedAt: {
            type: Datatypes.DATE,
            field: 'updated_at',
            allowNull: false
        }
    }, {
        tableName: 'refresh_tokens',
        timestamps: true
    });
    return RefreshToken;
}