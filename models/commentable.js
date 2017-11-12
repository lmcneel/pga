export default function(sequelize, DataTypes){
  const Commentable = sequelize.define("Commentable", {
    comment_id: {
      type: DataTypes.INTEGER,
      unique: 'commentable_comment_id'
    },
    commentable: {
      type: DataTypes.STRING,
      unique: 'commentable_comment_id'
    },
    commentable_id:{ 
      type: DataTypes.INTEGER,
      unique: 'commentable_comment_id',
      references: null
    }
  });
  return Commentable;
};
