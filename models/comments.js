export function(){
  const Comment = sequelize.define("Comment", {
    user_id: DataTypes.INT,
    comment: DataTypes.TEXT,


  });
  return Comment;
};
