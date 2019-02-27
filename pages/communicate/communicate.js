// pages/communicate/communicate.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabscurrent_scroll: 'all',
    visiblePub:false,
    typeArr: ['求购', '其它', '选项1', '选项2'],
    typeindex:0,
    tabsTypeData:[
      {
        key:'all',
        title:'全部'
      },
      {
        key: 'tab2',
        title: '交流'
      },
      {
        key: 'tab3',
        title: '疑问'
      },
      {
        key: 'tab4',
        title: '求购'
      },
      {
        key: 'tab5',
        title: '闲置'
      },
      {
        key: 'tab6',
        title: '海外'
      }
    ],
    messageData:[
      {
        src:'../../source/image/headpic5.png',
        nickname:'岁月的吻痕',
        time:'2019-02-12,14:32:09',
        text:'想买一个电脑显卡，性价比高一些的！'
      },
      {
        src: '../../source/image/headpic6.png',
        nickname: '北京达欣兴象商贸有限公司',
        time: '2019-02-12,15:36:49',
        text: '轻便型数码相机拥有高倍率变焦，其良好的性能为您提供了更加便捷的拍摄感受。北京市五棵松路40号摄影器材城典范店目前已上新尼康COOLPIX B600，有意向的请与我联系哦！'
      },
      {
        src: '../../source/image/headpic7.png',
        nickname: '威王电器',
        time: '2019-02-13,11:32:26',
        text: '威望电器在广州挂牌成立广东威王集团，正式宣布启动自有品牌战略，追赶珠三角小家电新一轮的品牌自建潮流。电饭煲贴牌加工有望突破瓶颈'
      },
      {
        src:'../../source/image/headpic8.png',
        nickname:'人生若如初見',
        time:'2019-02-12,13:32:27',
        text:'希望推荐一款性价比高的笔记本'
      },
      {
        src: '../../source/image/headpic4.png',
        nickname: '姿态动人',
        time: '2019-01-12,22:35:45',
        text: '怎么使用这个软件?'
      },
    ]
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