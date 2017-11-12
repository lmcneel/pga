export default function(sequelize, DataTypes){
  const Term = sequelize.define("Term", {
    term: DataTypes.TEXT,
    type: DataTypes.TEXT,
    short_slug: DataTypes.TEXT,
    up_votes: DataTypes.INTEGER,
    down_votes: DataTypes.INTEGER
  });

  Term.associate = (models) => {
    Term.belongsTo(models.User, {as: 'created_by'});
    Term.hasMany(models.Definition);
    Term.hasMany(models.Example);
    Term.belongsToMany(models.Comment, {
      through: {
        model: models.Commentable,
        unique: false,
        scope: {
          commentable: Term
        },
        foreignKey: 'commentable_id',
        constrainsts: false
      }
    }); // Close Comment Belongs To Many
    Term.belongsToMany(models.Image, {
      through: {
        model: models.Imageable,
        unique: false,
        scope: {
          imageable: Term
        },
        foreignKey: 'imagable_id',
        constrainsts: false
      }
    }); //Close Image Belongs To Many
    Term.belongsToMany(models.User, {
      through: {
        model: models.Favoriteable,
        unique: false,
        scope: {
          favoritable: Term
        },
      },
      foreignKey: 'favoritable_id',
      constraints: false
    }); //Close User belongs to many
  };

  return Term;
};
