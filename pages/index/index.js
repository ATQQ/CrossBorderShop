//index.js
//获取应用实例
const app = getApp()
const { $Toast } = require('../../source/plunge/iview/base/index');
Page({
  data: {
    bottomcurrent: '',
    inputShowed: false,
    inputVal: "",
    power: '',
    itabsData:[
      {
        key: 'tab0',
        title: '全部'
      },
      {
        key:'tab1',
        title:'评价'
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
        key:"tab4",
        title:"销量"
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
    recommendItems: [
      {
        title: 'FBK调货',
        src: [
          '../../source/image/goods4.png',
          '../../source/image/goods5.png'
        ]
      },
      {
        title: '分蛋糕',
        src: [
          '../../source/image/goods6.png',
          '../../source/image/goods7.png'
        ]
      }
    ],
    swiperItems: [
      {
        src: '../../source/image/swiper/test1.png'
      },
      {
        src: '../../source/image/swiper/test2.png'
      },
      {
        src: '../../source/image/swiper/test3.png'
      }
    ],
    notice_text: "聚龙金融设备股份有限公司与俄罗斯银行达成合作协议，出口点钞机1万台。",
    noticeArray: ['111', 'asqee', 'fdfdg中文'],
    tabscurrent: 'tab1',
    tabscurrent_scroll: 'tab1',
    goodsData:[
      {
        src:'../../source/image/goods1.png',
        title:'康艺JBYD-HT 点钞机',
        price:1380,
        sell:123
      },
      {
        src: '../../source/image/goods2.png',
        title: '智利进口红酒',
        price: 99,
        sell: 532
      }
      ,{
        src:'../../source/image/goods3.png',
        title:'爱他美（Aptamil） 澳新爱他美金装版 幼儿配方奶粉 3段（12-36个月） 900g',
        price: 150,
        sell: 139
      }
    ]
  },
  randomNumber:function () {
    return Math.floor(Math.random()*999); 
  },
  // 小功能列表
  test: function (res) {
    console.log(res.currentTarget.dataset.key);
  },
  tabsChangeScroll({ detail }) {
    this.setData({
      tabscurrent_scroll: detail.key
    })
    console.log(detail);
  },
  clickScan: function (res) {
    console.log("click scan");
    wx.scanCode({
      success: (res) => {
        console.log(res);
      }
    })
  },
  // searchBar
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  sureInput: function () {
    var val = this.data.inputVal;
    console.log('确定' + val);
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  //事件处理函数
  onLoad: function () {
    var that = this;
    var count = 0;
    this.setData({
      bottomcurrent: app.globalData.current,
      power: app.globalData.power
    })
    $Toast({
      content: '加载中',
      type: 'loading'
    });
  },
  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
    $Toast.hide();
  },
  setNotice: function (index) {
    var that = this;

    setTimeout((index) => {
      that.setData({

      })
    }, 2000)
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

      case 'newgoods':
        wx.redirectTo({
          url: '../newgoods/newgoods'
        })
        break;
      default:
        break;
    }
    app.globalData.current = detail.key;
    console.log(app.globalData.current);
  }
})
