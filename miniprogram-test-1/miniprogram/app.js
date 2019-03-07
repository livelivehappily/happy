//app.js
App({
  onLaunch: function () {
    var that = this;
    that.curid = wx.getStorageSync('curid') || that.curid;
    }
})
