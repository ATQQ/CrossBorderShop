
// pages/regist/regist.js
var app = getApp();
var baseUrl = app.globalData.baseUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    roles: [
      '消费者',
      '经销商',
      '厂商'
    ],
    nickname: null,
    username: null,
    password1: null,
    password2: null,
    email: null,
    origin:null,
    tel:null
  },

  roleChange: function (e) {
    this.setData({
      index: Number(e.detail.value)
    })
  },
  regist: function () {
    var data=this.data;
    var jsondata=null;
    jsondata = {
      'nickname': data.nickname,
      'password': data.password1,
      'username': data.username,
      'power': data.index
    };
    switch (data.index) {
      case 0:
        jsondata.info =JSON.stringify({
            'email': data.email
          })
        break;
      case 1:
        jsondata.info = JSON.stringify({
          'email': data.email,
          'origin':data.origin,
          'tel':data.tel
        })
        break;
      case 2:
        jsondata.info =JSON.stringify({
            'email': data.email
          })
        break;
    
      default:
        break;
    }
    
    console.log(JSON.stringify(jsondata));
    wx.request({
      url: baseUrl+'user/user',
      method:"PUT",
      data:JSON.stringify(jsondata),
      success:function(res){
        var data=res.data;
        if (data.state==1||data.state=="1") {
          wx.showToast({
            title: '注册成功',
            icon: 'succcess',
            duration: 1500        //  2秒后自动关闭
          })
          setTimeout(() => {
            wx.navigateBack({
              delta: 1
            })
          }, 1000);
        }else{
          wx.showToast({
            title: '用户名重复',
            icon: 'none',
            duration: 1000        //  2秒后自动关闭
          })
        }
      },
      fail:function(){
        wx.showLoading({
          title: '请检查网络',
          icon:"none"
        })
      }
    })
  },
  // 输入框获取值
  inputValue: function (res) {
    var key = res.currentTarget.dataset.key;
    var that = this;
    switch (key) {
      case 'username':
        that.setData({
          username: res.detail
        })
        break;
      case 'password1':
        that.setData({
          password1: res.detail
        })
        break;
      case 'password2':
        that.setData({
          password2: res.detail
        })
        break;
      case 'nickname':
        that.setData({
          nickname: res.detail
        })
        break;
      case 'email':
        that.setData({
          email: res.detail
        })
        break;
      case 'tel':
        that.setData({
          tel: res.detail
        })
        break;
      case 'origin':
        that.setData({
          origin: res.detail
        })
        break;
      default:
        break;
    }
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