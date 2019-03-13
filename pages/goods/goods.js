// pages/goods/goods.js
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
    ]
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