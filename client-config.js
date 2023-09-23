const environment = process.env.NEXT_PUBLIC_CUSTOM_NODE_ENV || "development"
// const environment = "staging";
// const environment = "production";

let clientConfig = {
  siteUrl: "http://localhost:8000",
  strapiUrl: "http://127.0.0.1:1337",
  graphqlUrl: "http://127.0.0.1:1337/graphql",
  serverBaseUrl: "http://127.0.0.1:1337/api",
//   medusaBackendUrl: "http://localhost:9000",
  prodUrl: "https://gerbas-tani.com",
//   serviceTypeId: process.env.NEXT_PUBLIC_SERVICE_TYPE_ID,
  environment,
}

if (environment === "production" || environment === "staging") {
  clientConfig = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    graphqlUrl: process.env.NEXT_PUBLIC_GRAPHQL_STRAPI_URL_PROD,
    serverBaseUrl: process.env.NEXT_PUBLIC_API_STRAPI_URL,
    medusaBackendUrl: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL,
    prodUrl: process.env.NEXT_PUBLIC_SITE_URL,
    serviceTypeId: process.env.NEXT_PUBLIC_SERVICE_TYPE_ID_PROD,
    environment,
  }
}

console.log("[LOG] ::: clientConfig: ", clientConfig)

module.exports = clientConfig
