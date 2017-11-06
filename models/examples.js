export function(){
  const Example = sequelize.define("Example", {
    code: DataTypes.TEXT,
    language_id: DataTypes.INT,
    term_id: DataTypes.INT,
    definition_id: DataTypes.INT,
    up_votes: DataTypes.INT,
    down_votes: DataTypes.INT,
    created_by: DataTypes.INT


  });
  return Example;
};
