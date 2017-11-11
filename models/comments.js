export default function() {
  const Comment = sequelize.define("Comment", {
    comment: DataTypes.TEXT,
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.User);
    // Term Comments
    Comment.belongsToMany(models.Term, {
      through: {
        model: models.Commetable,
        unique:false,
        scope: {
          commentable: Comment
        }
      },
      foreignKey: 'comment_id',
      constrainsts: false
    });
    // Definition Comments
    Comment.belongsToMany(models.Defintion, {
      through: {
        model: models.Commetable,
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
        model: models.Favoritable,
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
