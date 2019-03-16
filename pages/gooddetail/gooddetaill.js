// pages/gooddetail/gooddetaill.js
var app = getApp();
var baseUrl = app.globalData.baseUrl;
var requestHeader = app.globalData.header;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取搜索的关键字
    var mode = 'id';
    var that = this;
    var content=null;
    wx.getStorage({
      key: "searchid",       //  设置key
      success: function (res) {
        content=res.data;
        if (res.data == null||res.data=='') {
          wx.navigateTo({
            url: "../goods/goods"
          })
        } else {
          
          wx.request({
            url: baseUrl + 'goods/goods',
            method: "GET",
            header: requestHeader,
            data: {
              "mode": mode,
              "content": content
            },
            success: function (res) {
              console.log(res.data);
              var data = res.data;
              for (var i = 0; i < data.length; i++) {
                if (data[i].images != '[]' || data[i].images.length > 10)
                  data[i].images = JSON.parse(data[i].images);
                for (let j = 0; j < data[i].images.length; j++) {
                  data[i].images[j] = baseUrl + data[i].images[j];
                }
              }
              that.setData({
                goodsData: data
              })
            },
            fail: function () {
              wx.showToast({
                title: '网络异常',
                icon: "none",
                duration: 2000
              })
            }
          })
        }

      }
    })

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