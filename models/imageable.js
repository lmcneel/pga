export default function(sequelize, DataTypes){
  const Imageable = sequelize.define("Imageable", {
    image_id: {
      type: DataTypes.INTEGER,
      unique: 'imageable_image_id'
    },
    imageable: {
      type: DataTypes.STRING,
      unique: 'imageable_image_id'
    },
    imageable_id: {
      type: DataTypes.INTEGER,
      unique: 'imageable_image_id'
    },
  });

  
  return Imageable;
};
