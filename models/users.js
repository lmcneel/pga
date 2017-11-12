export default function(sequelize, DataTypes){
  const User = sequelize.define("User", {
    email: DataTypes.TEXT,
    display_name: DataTypes.TEXT,
    profile_url: DataTypes.TEXT,
    password: DataTypes.INTEGER,
  });

  User.associate = (models) => {
    User.hasOne(models.User_setting);
    User.hasMany(models.Comment);
    User.hasMany(models.Definition, {foreignKey: 'created_by', sourceKey: 'id'});
    User.hasMany(models.Example, {foreignKey: 'created_by', sourceKey: 'id'});
    User.hasMany(models.Term, {foreignKey: 'created_by', sourceKey: 'id'});
    User.belongsToMany(models.Term, {
      through: {
        model: models.Favoriteable,
        unique: false,
        scope: {
          favoriteable: User
        },
      },
      foreignKey: 'user_id',
      constraints: false
    });
    User.belongsToMany(models.Definition, {
      through: {
        model: models.Favoriteable,
        unique: false,
        scope: {
          favoriteable: User
        },
      },
      foreignKey: 'user_id',
      constraints: false
    });
    User.belongsToMany(models.Example, {
      through: {
        model: models.Favoriteable,
        unique: false,
        scope: {
          favoriteable: User
        },
      },
      foreignKey: 'user_id',
      constraints: false
    });
    
  };
  return User;
};
