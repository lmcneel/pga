export function(){
  const User = sequelize.define("User", {
    email: DataTypes.TEXT,
    display_name: DataTypes.TEXT,
    profile_url: DataTypes.TEXT,
    password: DataTypes.INT,
  })
  return User
}
