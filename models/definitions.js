export default function(sequelize, DataTypes){
  const Definition = sequelize.define("Definition", {
    definition: DataTypes.TEXT,
    up_votes: DataTypes.INTEGER,
    down_votes: DataTypes.INTEGER,
  });

  Definition.associate = (models) => {
    Definition.belongsTo(models.User, {as: 'created_by'});
    Definition.belongsTo(models.Term);
    Definition.hasMany(models.Example);
    Definition.belongsToMany(models.Comment, {
      through: {
        model: models.Commentable,
        unique: false,
        scope: {
          commentable: Definition
        },
        foreignKey: 'commentable_id',
        constrainsts: false
      }
    }); // Close Comment Belongs To Many
    Definition.belongsToMany(models.Image, {
      through: {
        model: models.Imagable,
        unique: false,
        scope: {
          imageable: Definition
        },
        foreignKey: 'imagable_id',
        constrainsts: false
      }
    }); //Close Image Belongs To Many
    Definition.belongsToMany(models.User, {
      through: models.Favoritable,
      unique: false,
      scope: {
        favoritable: Definition
      },
      foreignKey: 'favoritable_id',
      constraints: false
    }); //Close User belongs to many
  }
  return Definition;
};
