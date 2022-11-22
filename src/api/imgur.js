import qs from "qs"
const CLIENT_ID = process.env.IMGUR_CLIENT_ID
const ROOT_URL = "https://api.imgur.com"
// we could as well define an api client with axios so we don't always do axios.
export default {
  login() {
    console.log("attempting")
    console.log(process.env)
    console.log("attempting to login to imgur, clien id", CLIENT_ID)
    const query_string = {
      client_id: CLIENT_ID,
      respose_type: "token",
    }
    // redirect browser to imgur
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      query_string
    )}`
  },
}
