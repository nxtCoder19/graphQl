const getEnv = (key, required = false) => {
  const v = process.env[key];
  if (!v && required) {
    console.error(`env key '${key}' is not present`);
    process.exit(1);
  }
  return v;
};

const Env = {
  PORT: getEnv("PORT") || 3000,
  MONGODB_URI: getEnv("MONGODB_URI", true),
};

export default Env;
