export default function(sequelize, DataTypes) {
  const Comment = sequelize.define("Comment", {
    comment: DataTypes.TEXT,
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.User);
    // Term Comments
    Comment.belongsToMany(models.Term, {
      through: {
        model: models.Commentable,
        unique:false,
        scope: {
          commentable: Comment
        }
      },
      foreignKey: 'comment_id',
      constrainsts: false
    });
    // Definition Comments
    Comment.belongsToMany(models.Definition, {
      through: {
        model: models.Commentable,
        unique:false,
        scope: {
          commentable: Comment
        }
      },
      foreignKey: 'comment_id',
      constrainsts: false
    });
    // Example Comments
    Comment.belongsToMany(models.Example,{
      through: {
        model: models.Commentable,
        unique:false,
        scope: {
          commentable: Comment
        }
      },
      foreignKey: 'comment_id',
      constrainsts: false
    });
    // User Favorite's Comments
    Comment.belongsToMany(models.User, {
      through: {
        model: models.Favoriteable,
        unique:false,
        scope: {
          commentable: Comment
        }
      },
      foreignKey: 'favoritable_id',
      constrainsts: false
    });
  };
  return Comment;
};
