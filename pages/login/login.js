// pages/login/login.js
var app=getApp();
var baseUrl=app.globalData.baseUrl;
function loginwx(code, encryptedData, iv) {
  wx.request({
    url: baseUrl + 'test/wxLogin',
    data: {
      "code": code,
      "iv": iv,
      "encryptedData": encryptedData
    },
    success: function (res) {

    },
    fail: function () {
      console.log('fail');
    }
  })
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:''
  },
  // 登录
  login:function () {
    console.log(this.data.username);
    console.log(this.data.password);
  },
  // 注册
  regist:function(){
    wx.navigateTo({
      url:'../regist/regist'
    })
  },
  inputPassword:function(e){
    this.setData({
      password:e.detail
    })
    // console.log(e.detail);
  },
  inputName: function (e) {
    this.setData({
      username: e.detail
    })
    // console.log(e.detail);

  },
  wxLogin:function(e){
    wx.login({
      success:function(res){
        // console.log(res.code);
        if(res.code){
          var code=res.code;
          wx.getUserInfo({
            success:function(res2){
              console.log(res2);
              var encryptedData=res2.encryptedData;
              var iv=res2.iv;
              loginwx(code,encryptedData,iv);
            },
            fail:function (res2) {
                console.log("请求失败,没有授权")
            }
          })
        }else{
          console.log('获取用户登录态失败！' + res.errMsg);
        }
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})