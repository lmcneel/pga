
export default function(sequelize, DataTypes) {
  const Color_scheme = sequelize.define("Color_scheme",{
    name: DataTypes.STRING
  });

  return Color_scheme;
};