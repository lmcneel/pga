export function(){
  const Image = sequelize.define("Image", {
    url: DataTypes.TEXT,
    short_slug: DataTypes.TEXT,
    description: DataTypes.TEXT,
    up_votes: DataTypes.INT,
    down_votes: DataTypes.INT,
    created_by: DataTypes.INT

  });
  return Image;
};
