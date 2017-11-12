export default function(sequelize, DataTypes){
  const Image = sequelize.define("Image", {
    url: DataTypes.TEXT,
    short_slug: DataTypes.TEXT,
    description: DataTypes.TEXT,
    up_votes: DataTypes.INTEGER,
    down_votes: DataTypes.INTEGER,
  });

  Image.associate = (models) => {
    Image.belongsTo(models.User, {as: 'created_by'});
    Image.belongsToMany(models.Definition, {
        through: {
          model: models.Imageable,
          unique: false,
          scope: {
            imageable: Image
          },
        },
        foreignKey: 'image_id',
        constrainsts: false
    });
    Image.belongsToMany(models.Example, {
      through: {
        model: models.Imageable,
        unique: false,
        scope: {
          imageable: Image
        },
      },
      foreignKey: 'image_id',
      constrainsts: false
    });
   Image.belongsToMany(models.Term, {
        through: {
          model: models.Imageable,
          unique: false,
          scope: {
            imageable: Image
          },
        },
        foreignKey: 'image_id',
        constrainsts: false
    });
  };
  return Image;
};
