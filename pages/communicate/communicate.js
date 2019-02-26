// pages/communicate/communicate.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabscurrent_scroll: 'tab1',
    visiblePub:false,
    typeArr: ['求购', '其它', '选项1', '选项2'],
    typeindex:0
  },
  tabsChangeScroll({ detail }) {
    this.setData({
      tabscurrent_scroll: detail.key
    })
    console.log(detail);
  },
  // 发布信息弹窗
  publishnews:function (e) {
    console.log(e);
    this.setData({
      visiblePub:true
    })
  },
  cancelPub(){
    this.setData({
      visiblePub: false
    })
  },
  surePub(){
    this.setData({
      visiblePub: false
    })
    wx.navigateTo({
      url: '../pubContent/pubContent'
    })
  },
  // 类型改变
  pubtypeChange(e){
    console.log(e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      bottomcurrent: app.globalData.current,
      power: app.globalData.power
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

  },
  // 底部tabbars
  bottomPageChange({ detail }) {
    this.setData({
      bottomcurrent: detail.key
    });
    switch (detail.key) {
      case 'homepage':
        wx.redirectTo({
          url: '../index/index'
        })
        break;
      case 'message':
        wx.redirectTo({
          url: '../message/message'
        })
        break;
      case 'communicate':
        wx.redirectTo({
          url: '../communicate/communicate'
        })
        break;
      case 'mine':
        wx.redirectTo({
          url: '../mine/mine'
        })
        break;
      default:
        break;
    }
    app.globalData.current = detail.key;
    console.log(app.globalData.current);
  }
})