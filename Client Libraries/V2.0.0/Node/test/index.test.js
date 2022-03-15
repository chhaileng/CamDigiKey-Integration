require('dotenv').config({
  path: `./.env`,
});
const { CamDigiKeyClient } = require('../lib');

var accessToken;
var personalCode = 'TDD000000888';
var orgAccessToken;
var accountToken;

/* --- 1 --- */
test('Get Login Token Test', async () => {
  const res = await CamDigiKeyClient.getLoginToken();
  expect(res.error).toEqual(0);
  expect(res.data.loginUrl).toContain('login?loginToken=');
  expect(res.data.loginToken).not.toBeNull();
  expect(res.data.loginToken.split('.').length).toEqual(3);
  console.log("Login URL =>", res.data.loginUrl);
});

/* --- 2 --- */
test('Get User Access Token Test', async () => {
  // Open login URL in web browser and scan QR code with CamDigiKey, then copy `authToken` to here
  const authToken = 'eyJleHBpcnlEYXRlIjoxNjQ3MzMzNjM1MzEyLCJ0eXAiOiJKV1QiLCJhbGciOiJTSEE1MTJ3aXRoRUNEU0EifQ==.JHpZFFPLooOlHZhydJ-6Nz9iEwkBlDsssbq1qX1lZJryrn-iMBfbxXCXVmxLctggoSO6yCymHwXBkUTcl_LJqg==.MIGIAkIB3ZmoB4ZmjNrPXm_qEy28B908eDbJP4taz2oRzYkzq11cAF_5TfQS-gfCUYU5Zpy67T56jFbQ-6qQavLJbL7AQ4ECQgFAK8RjfJLL6S6xxjB4r1ALbWWwdXnPdr09LGc44Qo1xidZrrvgdT0bNCfbQb0NQ7JQa6GLbuTaYfc1O5ODB7Udmw==';
  const res = await CamDigiKeyClient.getUserAccessToken(authToken)
  expect(res.error).toEqual(0);
  expect(res.data.accessToken).not.toBeNull();
  expect(res.data.accessToken.split('.').length).toEqual(3);
  accessToken = res.data.accessToken;
  // console.log(accessToken);
});

/* --- 3 --- */
test('Verify Access Token Test', async () => {
  await validUserTokenVerify(accessToken);
});

/* --- 4 --- */
test('Refresh Access Token Test', async () => {
  const newTokenRes = await CamDigiKeyClient.refreshUserAccessToken(accessToken);
  expect(newTokenRes.error).toEqual(0);
  expect(newTokenRes.data.accessToken).not.toBeNull();
  expect(newTokenRes.data.accessToken.split('.').length).toEqual(3);

  await invalidUserTokenVerify(accessToken);
  accessToken = newTokenRes.data.accessToken;
  await validUserTokenVerify(accessToken);
});

/* --- 5 --- */
test('Get Organization Token Test', async () => {
  const res = await CamDigiKeyClient.getOrganizationAccessToken();
  expect(res.error).toEqual(0);
  expect(res.data.accessToken).not.toBeNull();
  expect(res.data.accessToken.split('.').length).toEqual(3);
  orgAccessToken = res.data.accessToken;
});

/* --- 6 --- */
test('Lookup User Profile Test', async () => {
  const res = await CamDigiKeyClient.lookupUserProfile(accessToken, personalCode);
  expect(res.error).toEqual(0);
  expect(res.data.personal_code).not.toBeNull();
  expect(res.data.camdigikey_id).not.toBeNull();
  expect(res.data.surname_en).not.toBeNull();
  expect(res.data.given_name_en).not.toBeNull();
  expect(res.data.mobile_phone_number).not.toBeNull();
  expect(res.data.email_address).not.toBeNull();
  expect(res.data.expired_date).not.toBeNull();
  expect(res.data.account_token).not.toBeNull();

  accountToken = res.data.account_token;
});

/* --- 7 --- */
test('Verify Account Token Test', async () => {
    const res = await CamDigiKeyClient.verifyAccountToken(accountToken);
  expect(res.error).toEqual(0);
  expect(res.data.personal_code).not.toBeNull();
  expect(res.data.camdigikey_id).not.toBeNull();
  expect(res.data.surname_en).not.toBeNull();
  expect(res.data.given_name_en).not.toBeNull();
  expect(res.data.mobile_phone_number).not.toBeNull();
  expect(res.data.email_address).not.toBeNull();
});

/* --- 8 --- */
test('Logout User AccessToken Test', async () => {
  const res = await CamDigiKeyClient.logoutAccessToken(accessToken);
  expect(res.error).toEqual(0);
  await invalidUserTokenVerify(accessToken);
});

async function invalidUserTokenVerify(token) {
  const res = await CamDigiKeyClient.validateJwt(token);
  expect(res.is_valid).toBeFalsy();
  expect(res.payload).toBeNull();
}

async function validUserTokenVerify(token) {
  const res = await CamDigiKeyClient.validateJwt(token);
  expect(res.is_valid).toBeTruthy()
  expect(res.payload).not.toBeNull();
  const { payload } = res;
  expect(payload.camdigikey_id).not.toBeNull();
  expect(payload.first_name_en).not.toBeNull();
  expect(payload.last_name_en).not.toBeNull();
  expect(payload.gender).not.toBeNull();
  expect(payload.dob).not.toBeNull();
  expect(payload.iss).not.toBeNull();
  expect(payload.type).not.toBeNull();
  expect(payload.personal_code).not.toBeNull();
  expect(payload.mobile_phone).not.toBeNull();
  expect(payload.email).not.toBeNull();
  expect(payload.nationality).not.toBeNull();
  expect(payload.exp).not.toBeNull();
  expect(payload.nbf).not.toBeNull();
  expect(payload.iat).not.toBeNull();
  expect(payload.jti).not.toBeNull();
}