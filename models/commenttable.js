export function(){
  const Commenttable = sequelize.define("Commenttable", {
    comment_id: DataTypes.INT,
    commenttable: DataTypes.STRING,
    commenttable_id: DataTypes.INT
    

  });
  return Commenttable;
}
