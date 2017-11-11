export function(){
  const Favoritetable = sequelize.define("Favoritetable", {
    user_id: DataTypes.INT,
    favoritetable: DataTypes.TEXT,
    favoritetable_id: DataTypes.INT
  });
  return Favoritetable;
};
