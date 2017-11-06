export function(){
  const Imagetable = sequelize.define("Imagetable", {
    imagetable: DataTypes.TEXT,
    imagetable_id: DataTypes.INT,



  });
  return Imagetable;
};
