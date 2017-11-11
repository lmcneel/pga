export default function(sequelize, DataTypes){
  const Example = sequelize.define("Example", {
    code: DataTypes.TEXT,
    up_votes: DataTypes.INTEGER,
    down_votes: DataTypes.INTEGER
  }); // Close sequelize.define

  Example.associate = (models) => {
    Example.belongsTo('User', {as: 'created_by'});
  };
  return Example;
};
