import mongoose from "mongoose";

const { MONGODB_URI, MONGODB_PASSWORD } = process.env;

const db = () => {
  try {
    mongoose.connect(
      MONGODB_URI.replace("<password>", MONGODB_PASSWORD),
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
      (err) => {
        if (!err) {
          console.log("MongoDB Connection Succeeded.");
        } else {
          console.log("Error in DB connection  : ", err.message);
        }
      }
    );
  } catch (error) {
    console.log("Error in DB connnection ");
    console.log(error.message);
  }
};

db();

export default mongoose;
