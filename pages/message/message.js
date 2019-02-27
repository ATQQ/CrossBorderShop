// pages/message/message.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageData: [
      {
        src: '../../source/image/headpic2.png',
        nickname: '十堰经济开发区庭艳汽配经营部',
        time: '2019-02-26,18:35:44',
        text: '我们家的发动机悬置装置生产技术是十分有保障的，完全达得到您刚才所描述的参数以及性能。但具体数据希望您能发一个详细文件。'
      },
      {
        src: '../../source/image/headpic1.png',
        nickname: '沃诺康明斯配件专营店',
        time: '2019-02-25,17:23:12',
        text: '我家发动机缸体5302096适用于东风康明斯IS6D机型。但如果是与此机型相似类别的机型，我公司也可以进行加工制造。'
      },
      {
        src: '../../source/image/headpic3.png',
        nickname: '济南塔森进出口有限公司',
        time: '2019-02-26,14:56:10',
        text: '曼MC07发动机、曼MC05发动机、曼MC11发动机、曼MT07发动机 SCR后处理系统等我们都在做。报价区间随所购数量的每30件下降0.05个点。'
      },
      {
        src: '../../source/image/headpic4.png',
        nickname: '华为亚太市场部',
        time: '2019-01-26,15:56:10',
        text: '亚太地区目前的装配车间设备的需求在增加，如若有此类设备制造商可与我私聊。'
      }
    ]
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