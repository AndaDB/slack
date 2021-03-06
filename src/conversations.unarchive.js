
// this file was generated by ./scripts/generate-web-api
import exec from './_exec'
import validate from './_validate'

export default function conversationsunarchive(params, callback) {
  let ns = 'conversations.unarchive'
  let err = validate(ns, params)
  if (err) {
    callback(err)
  }
  else {
    exec(ns, params, callback)
  }
}
