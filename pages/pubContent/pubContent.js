// pages/pubContent/pubContent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentType:["服饰","电子产品","自行车","机械零件","其它"],
    typeIndex:0,
    textArea:''
  },
  textChange:function (e) {
    this.setData({
      textArea:e.detail.value
    })    
  },
  typeChange:function(e){
      this.setData({
        typeIndex:e.detail.value
      })
  },
  surePub:function () {
    var data = this.data;
    console.log(data.contentType[data.typeIndex]);
    console.log(data.textArea);
  },
  cancelPub: function () {
    wx.navigateBack({
      delta:1
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