import Sequelize, { Model } from "sequelize";

class Pokemon extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        name: Sequelize.STRING,
        status: Sequelize.STRING,
        userId: {
          type:Sequelize.INTEGER,
          field: 'user_id'
        },
        seq: Sequelize.INTEGER
      },
      {
        sequelize,
        timestamps: true, //If it's false do not add the attributes (updatedAt, createdAt).
        //paranoid: true, //If it's true, it does not allow deleting from the bank, but inserts column deletedAt. Timestamps need be true.
        //underscored: true, //If it's true, does not add camelcase for automatically generated attributes, so if we define updatedAt it will be created as updated_at.
        //freezeTableName: false, //If it's false, it will use the table name in the plural. Ex: Users
        //tableName: 'Users' //Define table name
      }
    );

    this.addHook("beforeSave", async () => {
      
    });

    return this;
  }

  static associate(models) {
    // this.belongsTo(models.User, {
    //   foreignKey: "user_id",
    // });
    this.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Pokemon;


