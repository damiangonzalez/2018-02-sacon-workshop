/***********************************
 discovery westl document
 ***********************************/

var wstl = [
  {
    name : "dashboard",
    type : "safe",
    action : "read",
    kind : "disco",
    target : "html link page",
    prompt : "Dashboard"
  },
  {
    name : "itemLink",
    type : "safe",
    action : "read",
    kind : "disco",
    target : "html link page",
    prompt : "Get Item"
  },
  {
    name : "itemForm",
    type : "safe",
    action : "read",
    kind : "disco",
    target : "html form",
    prompt : "Get Item",
    inputs : [
      {name : "registryID", prompt : "Registry ID", value : "", required:true}
    ]
  },
  {
    name : "registerLink",
    type : "safe",
    action : "read",
    kind : "disco",
    target : "html link page",
    prompt : "Register a Service",
  },
  {
    name : "registerForm",
    type : "unsafe",
    action : "add",
    kind : "disco",
    target : "html form",
    prompt : "Register a Service",
    inputs : [
      {name : "serviceURL", prompt : "Service URL", value : "", required:true},
      {name : "serviceName", prompt : "Service Name", value : "", required:true},
      {name : "semanticProfile", prompt : "Profiles", value : ""},
      {name : "requestMediaType", prompt : "Request Media Types", value : ""},
      {name : "responseMediaType", prompt : "Request Media Types", value : ""},
      {name : "healthURL", prompt : "Health URL", value : ""},
      {name : "healthTTL", prompt : "Health TTL (sec)", value : ""},
      {name : "renewTTL", prompt : "Renewal TTL (sec)", value : ""},
    ]
  },
  {
    name : "unregisterLink",
    type : "safe",
    action : "read",
    kind : "disco",
    target : "html link page",
    prompt : "Unregister a Service",
  },
  {
    name : "unregisterForm",
    type : "unsafe",
    action : "remove",
    kind : "disco",
    target : "html form",
    prompt : "Unregister a Service",
    inputs : [
      {name : "registryID", prompt : "Registry ID", value : "", required:true},
    ]
  },
  {
    name : "renewLink",
    type : "safe",
    action : "read",
    kind : "disco",
    target : "html link page",
    prompt : "Renew a Service",
  },
  {
    name : "renewForm",
    type : "unsafe",
    action : "update",
    kind : "disco",
    target : "html form",
    prompt : "Renewal Form",
    inputs : [
      {name : "registryID", prompt : "Registry ID", value : "", required : true}
    ]
  },  
  {
    name : "healthLink",
    type : "safe",
    action : "read",
    kind : "disco",
    target : "html link page",
    prompt : "Send Health Check to a Service",
  },
  {
    name : "healthForm",
    type : "unsafe",
    action : "add",
    kind : "disco",
    target : "html form",
    prompt : "Health Check Form",
    inputs : [
      {name : "registryID", prompt : "Registry ID", value : "", required:true},
    ]
  },
  {
    name : "findLink",
    type : "safe",
    action : "read",
    kind : "disco",
    target : "html link page",
    prompt : "Find a Service",
  },
  {
    name : "findForm",
    type : "safe",
    action : "read",
    kind : "disco",
    target : "html form",
    prompt : "Find a Service",
    inputs : [
      {name : "serviceURL", prompt : "Service URL", value : ""},
      {name : "serviceName", prompt : "Service Name", value : ""},
      {name : "semanticProfile", prompt : "Profiles", value : ""},
      {name : "requestMediaType", prompt : "Request Media Types", value : ""},
      {name : "responseMediaType", prompt : "Request Media Types", value : ""},
      {name : "healthURL", prompt : "Health URL", value : ""},
      {name : "healthTTL", prompt : "Health TTL (sec)", value : ""},
      {name : "renewTTL", prompt : "Renewal TTL (sec)", value : ""},
    ]
  },
]; 

module.exports = wstl;
