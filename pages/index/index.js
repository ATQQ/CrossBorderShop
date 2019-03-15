//index.js
//获取应用实例
const app = getApp()
const { $Toast } = require('../../source/plunge/iview/base/index');
var baseUrl = app.globalData.baseUrl;
var requestHeader = app.globalData.header;

Page({
  data: {
    smallfuns:[
      {
        src: baseUrl + 'upload/images/find.png',
        title:'码头'
      },
      {
        src: baseUrl + 'upload/images/shop.png',
        title:'分类'
      }
    ],
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
          baseUrl +'upload/images/goods4.png',
          baseUrl +'upload/images/goods5.png'
        ]
      },
      {
        title: '分蛋糕',
        src: [
          baseUrl +'upload/images/goods6.png',
          baseUrl +'upload/images/goods7.png'
        ]
      }
    ],
    swiperItems: [
      {
        src: baseUrl +'upload/images/swiper/test1.png'
      },
      {
        src: baseUrl +'upload/images/swiper/test2.png'
      },
      {
        src: baseUrl +'upload/images/swiper/test3.png'
      }
    ],
    notice_text: "聚龙金融设备股份有限公司与俄罗斯银行达成合作协议，出口点钞机1万台。",
    noticeArray: ['111', 'asqee', 'fdfdg中文'],
    tabscurrent: 'tab1',
    tabscurrent_scroll: 'tab1',
    goodsData:[
      {
        src:baseUrl +'upload/images/goods1.png',
        title:'康艺JBYD-HT 点钞机',
        price:1380,
        sell:123
      },
      {
        src: baseUrl +'upload/images/goods2.png',
        title: '智利进口红酒',
        price: 99,
        sell: 532
      }
      ,{
        src:baseUrl +'upload/images/goods3.png',
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
  // 确认搜索
  sureInput: function () {
    var val = this.data.inputVal;
    console.log('确定' + val);
    var that=this;
    var mode = 'home';
    if(val==''||val==null){
      mode = 'home';
    }else{
      mode = 'search';
    }
    wx.request({
      url: baseUrl + 'goods/goods',
      method: "GET",
      header: requestHeader,
      data: {
        "mode": mode,
        "content": val
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

    wx.request({
      url: baseUrl + 'goods/goods',
      method: "GET",
      header: requestHeader,
      data:{
        "mode":"home",
        "content":"none",
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
          wx.navigateTo({
            url: '../newgoods/newgoods',
          })
        break;
      default:
        break;
    }
    app.globalData.current = detail.key;
    console.log(app.globalData.current);
  }
})
