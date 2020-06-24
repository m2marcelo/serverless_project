// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '411b9hdg47'
export const apiEndpoint = `https://${apiId}.execute-api.us-west-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-m2marcelo.eu.auth0.com',            // Auth0 domain
  clientId: 'wetjGFkF7TL0d93WLhTC81O2otNP80NV',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
