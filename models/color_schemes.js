export function(){
  const Color_schemes = sequelize.define("Color_schemes", {
    name: DataTypes.STRING,


  })
  return Color_schemes 
}
