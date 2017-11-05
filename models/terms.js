export function(){
  const Term = sequelize.define("Term", {
    term: DataTypes.TEXT,
    type: DataTypes.TEXT,
    short_slug: DataTypes.TEXT,
    up_votes: DataTypes.INT,
    down_votes: DataTypes.INT,
    created_by: DataTypes.INT


  })
  return Term
}
