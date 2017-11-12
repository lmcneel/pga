export default function(sequelize, DataTypes){
  const User_setting = sequelize.define("User_setting", {
    timezone: DataTypes.TEXT
  });

  User_setting.associate = (models) => {
    User_setting.belongsTo(models.User);
    User_setting.belongsTo(models.Language, {as: 'default_language'});
    User_setting.belongsTo(models.Color_scheme);
  }

  return User_setting;
};
