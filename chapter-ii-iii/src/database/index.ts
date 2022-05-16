import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
  host: string;
}

getConnectionOptions().then((o) => {
  const options = o as IOptions;
  options.host = "postgres-ignite";
  createConnection({ ...o });
});
