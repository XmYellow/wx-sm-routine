Page({
  data: {
    array: [{
      mode: 'scaleToFill',
      text: 'scaleToFill：不保持纵横比缩放图片'
    }, { 
      mode: 'aspectFit',
      text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
    }],
    src: 'https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/0.jpg?t=20161222'
  },
  imageError: function(e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  },
    bindViewTap: function() {
    wx.navigateTo({
      url: '../index/index'
    })
  },
})