export function(){
  const User_setting = sequelize.define("User_setting", {
    user_id: DataTypes.INT,
    default_language: DataTypes.INT,
    color_scheme_id: DataTypes.INT,
    timezone: DataTypes.TEXT,
  });
  return User_setting;
};
