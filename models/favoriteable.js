export default function(sequelize, DataTypes){
  const Favoriteable = sequelize.define("Favoriteable", {
    user_id: {
      type: DataTypes.INTEGER,
      unique: 'favoriteable_user_id'
    },
    favoritetable: {
      type: DataTypes.STRING,
      unique: 'favoriteable_user_id'
    },
    favoritetable_id: {
      type: DataTypes.INTEGER,
      unique: 'favoriteable_user_id'
    }
  });
  return Favoriteable;
};
