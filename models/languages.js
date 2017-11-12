export default function(sequelize, DataTypes){
  const Language = sequelize.define("Language", {
    language: DataTypes.TEXT,
    description: DataTypes.TEXT,
    short_slug: DataTypes.TEXT
  });

  Language.associate = (models) => {
    Language.hasOne(models.Definition);
    Language.hasOne(models.Example);
    Language.hasOne(models.Term);
    Language.hasOne(models.User_setting);
  };
  return Language;
};
