import  mysql  from "mysql";

export const connectToDatabase = async () => {
  const client = await mysql.createConnection({
    host: "ocm-aof-secoms-dev-db.catzdsrencgl.ap-southeast-1.rds.amazonaws.com",
    user: "admin",
    password: "1HoQtETN0KrrXL1q2r8k",
    database: "SECOMS",
  });

  return client ;
};
