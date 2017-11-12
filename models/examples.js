export default function(sequelize, DataTypes){
  const Example = sequelize.define("Example", {
    code: DataTypes.TEXT,
    up_votes: DataTypes.INTEGER,
    down_votes: DataTypes.INTEGER
  }); // Close sequelize.define

  Example.associate = (models) => {
    Example.belongsTo(models.User, {as: 'created_by'});
    Example.belongsTo(models.Language);
    Example.belongsTo(models.Term);
    Example.belongsTo(models.Definition);
    Example.belongsToMany(models.Comment, {
      through: {
        model: models.Commentable,
        unique: false,
        scope: {
          commentable: Example
        },
      },
        foreignKey: 'commentable_id',
        constrainsts: false
    });
    Example.belongsToMany(models.Image, {
      through: {
        model: models.Imageable,
        unique: false,
        scope: {
          imageable: Example
        },
      },
        foreignKey: 'imageable_id',
        constrainsts: false
    }); //Close Image Belongs To Many
    Example.belongsToMany(models.User, {
      through: {
        model: models.Favoriteable,
        unique: false,
        scope: {
          favoriteable: Example
        },
      },
      foreignKey: 'favoriteable_id',
      constraints: false
    }); //Close User belongs to many
  };
  return Example;
}
