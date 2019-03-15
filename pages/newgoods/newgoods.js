// pages/newgoods/newgoods.js
const app = getApp();
var baseUrl = app.globalData.baseUrl;
var requestHeader = app.globalData.header;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showPopup: false,
    goodsData: [],
    goodsrange: [
      "衣服", "游戏外设", "数码产品"
    ],
    images: null,
    text: '',
    imagesList: null
  },
  publishnews: function() {
    this.setData({
      showPopup: true
    })
  },
  closePopup: function() {
    this.setData({
      showPopup: false
    })
  },
  goodsChange: function(res) {
    this.setData({
      index: Number(res.detail.value)
    })
  },
  previewImage: function(e) {
    var current = e.target.dataset.src;
    console.log(current)
    wx.previewImage({
      urls: this.data.images,
      current: current
    })
  },
  btnAdd: function() {
    var that = this;
    wx.chooseImage({
      count: 9, // 最多只允许选择一个图像
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        that.setData({
          images: res.tempFilePaths //  显示选中图像
        })
      }
    })
  },
  textinput: function(res) {
    // console.log(res.detail.value);
    this.setData({
      text: res.detail.value
    })
  },
  uploadimage: function() {
    var data = this.data;
    var imgPaths = data.images;
    //零食存放路径
    var timages = new Array();
    if (imgPaths != null) {
      for (let index = 0; index < imgPaths.length; index++) {
        wx.uploadFile({
          url: baseUrl + 'goods/image',
          filePath: imgPaths[index],
          name: 'file',
          success: function(res) {
            console.log("上传主题图片列表:" + res.data);
            timages[index] = res.data;
          }
        })
      }
    }
    // console.log(timages);

    this.setData({
      imagesList: timages
    })
  },
  // 确认上新
  surePub: function(e) {
    this.uploadimage();
    var data = this.data;

    setTimeout(() => {
      var images = data.imagesList;

      // console.log(JSON.stringify(images));
      wx.request({
        url: baseUrl + 'goods/good',
        method: "PUT",
        header: requestHeader,
        data: JSON.stringify({
          "name": data.goodsname,
          "type": data.goodsrange[data.index],
          "price": data.goodsprice,
          "version": data.goodsversion,
          "detail": data.text,
          "stock": data.goodsstock,
          "images": JSON.stringify(images)
        }),
        success: function(res) {
          console.log(res.data);
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000, //  2秒后自动关闭
            complete: function() {
              wx.redirectTo({
                url: 'newgoods',
              })
              console.log("success");
            }
          })
        }
      })
    }, 2000);




  },
  inputValue: function(res) {
    var key = res.currentTarget.dataset.key;
    var that = this;
    switch (key) {
      case 'goodsname':
        that.setData({
          goodsname: res.detail
        })
        break;
      case 'goodsprice':
        that.setData({
          goodsprice: res.detail
        })
        break;
      case 'goodsversion':
        that.setData({
          goodsversion: res.detail
        })
        break;
      case 'goodsstock':
        that.setData({
          goodsstock: res.detail
        })
        break;
      default:
        break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
    var that = this;
    wx.request({
      url: baseUrl + 'goods/good',
      method: "GET",
      header: requestHeader,
      success: function(res) {
        console.log(res.data);
        var data = res.data;

        for (var i = 0; i < data.length;i++) {
          if (data[i].images!='[]'||data[i].images.length>10)
          data[i].images = JSON.parse(data[i].images);
          for (let j = 0; j < data[i].images.length;j++){
            data[i].images[j] = baseUrl + data[i].images[j];
          }
        }

        that.setData({
          goodsData:data
        })
      },
      fail: function() {
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
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})