
export default function(sequelize, DataTypes) {
  const Color_scheme = sequelize.define("Color_scheme",{
    name: DataTypes.STRING
  });

  Color_scheme.associate = (models) => {
    Color_scheme.hasOne(models.User_setting);
  };
  return Color_scheme;
};