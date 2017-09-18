module.exports = [
  {
    match: "/",
    controller: "home.index"
  },
  {
    match: "/login",
    controller: "home.login",
    method: "get"
  },
  {
    match: "/login",
    controller: "home.login2",
    method: "post"
  },
  {
    match: "/ajax/1",
    controller: "home.ajax1"
  },
  {
    match: "/ajax/2",
    controller: "home.ajax2"
  }
]