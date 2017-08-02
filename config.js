(function (module) {
  var exports = module.exports = {};
  //易源接口应用ID
  var appid = 42819;
  //接口密钥
  var secret = "e1729fcdbfd744b1b295d42520bd3664";
  //GET方式的参数
  var param = "?showapi_appid=" + appid + "&showapi_sign=" + secret;
  //热门榜单访问接口
  var hotUrl = "https://route.showapi.com/213-4" + param;
  //根据歌名、人名查询歌曲接口
  var searchByNameUrl = "https://route.showapi.com/213-1" + param;
  var searchByIdUrl = "https://route.showapi.com/213-2" + param;

  module.exports = {
    config: {
      hotUrl: hotUrl,
      searchByNameUrl: searchByNameUrl,
      searchByIdUrl: searchByIdUrl
    }
  };
})(module);