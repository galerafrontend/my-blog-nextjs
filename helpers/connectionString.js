export const connectionString = `mongodb+srv://${process.env.mdb_username}:${process.env.mdb_password}@${process.env.mdb_clustername}.vibpqwp.mongodb.net/${process.env.mdb_database}?retryWrites=true&w=majority`;
