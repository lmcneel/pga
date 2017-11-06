export function(){
  const Definition = sequelize.define("Definition", {
    definition: DataTypes.TEXT,
    term_id: DataTypes.INT,
    up_votes: DataTypes.INT,
    down_votes: DataTypes.INT,
    created_by: DataTypes.INT


  });
  return Definition;
};
