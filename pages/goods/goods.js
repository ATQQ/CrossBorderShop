// pages/goods/goods.js
var app = getApp();
var baseUrl = app.globalData.baseUrl;
var requestHeader = app.globalData.header;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabscurrent: 'tab1',
    tabscurrent_scroll: 'tab1',
    itabsData: [
      {
        key: 'tab0',
        title: '全部'
      },
      {
        key: 'tab1',
        title: '评价'
      },
      {
        key: 'tab2',
        title: '地域'
      },
      {
        key: 'tab3',
        title: '价格'
      },
      {
        key: "tab4",
        title: "销量"
      },
      {
        key: "tab5",
        title: "好评"
      },
      {
        key: "tab6",
        title: "推荐"
      }
    ],
    goodsData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 同步读取为null
    // var content = wx.setStorageSync('searchkey');
    // 异步读取
    var content=null;
    var that=this;
    wx.getStorage({
      key:"searchkey",
      success:function(res){
        console.log(res.data);
        content=res.data;
        that.updateGoods(content);
      }
    })

  },
  updateGoods:function (content) {
    // 获取搜索的关键字
    var mode = 'search';
    if (content == null||content=='home'||content=='')
      mode = 'home';
    var that = this;
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