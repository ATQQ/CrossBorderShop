// pages/newgoods/newgoods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showPopup: false,
    goodsData: [
      {
        src: '../../source/image/goods1.png',
        title: '康艺JBYD-HT 点钞机',
        price: 1380,
        sell: 123
      },
      {
        src: '../../source/image/goods2.png',
        title: '智利进口红酒',
        price: 99,
        sell: 532
      }
      , {
        src: '../../source/image/goods3.png',
        title: '爱他美（Aptamil） 澳新爱他美金装版 幼儿配方奶粉 3段（12-36个月） 900g',
        price: 150,
        sell: 139
      }
    ],
    goodsrange:[
      "衣服","游戏外设","数码产品"
    ],
    images: null,
    text: ''
  },
  publishnews:function () {
    this.setData({
      showPopup:true
    })
  },
  closePopup: function () {
    this.setData({
      showPopup: false
    })
  },
  goodsChange:function (res) {
    this.setData({
      index: Number(res.detail.value)
    })
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    console.log(current)
    wx.previewImage({
      urls: this.data.images,
      current: current
    })
  },
  btnAdd: function () {
    var that = this;
    wx.chooseImage({
      count: 9, // 最多只允许选择一个图像
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        that.setData({
          images: res.tempFilePaths //  显示选中图像
        })
      }
    })
  },
  textinput: function (res) {
    // console.log(res.detail.value);
    this.setData({
      text: res.detail.value
    })
  },
  surePub: function (e) {
    var imgs = this.data.images;
    var text = this.data.text;
    console.log(imgs);
    console.log(text);
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000, //  2秒后自动关闭
      complete: function () {
        wx.navigateBack({
          delta: 1
        })
      }
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