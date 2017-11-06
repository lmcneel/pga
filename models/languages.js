export function(){
  const Language = sequelize.define("Language", {
    language: DataTypes.TEXT,
    description: DataTypes.TEXT,
    short_slug: DataTypes.TEXT
  });
  return Language;
};
