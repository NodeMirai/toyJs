/**
 * @description 获取url中名为name的参数
 * @param search window.location.search例如?name=xyz
 * @param name ?name=xyz
 */
function getQueryString(search, name) {

  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = search.substr(1).match(reg);
  if (r != null) {
    return (r[2]);
  } else {
    return null;
  }

}

var sname = getQueryString("?name=xyz", "name");
if (sname != null) {
  var sname_ = decodeURIComponent(sname);
  console.log(sname_);
}