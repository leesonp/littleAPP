// modelTest.js
var model = require('../../model/model.js')

var show = false;
var item = {};


Page({
  data: {
    item: {
      show: show
    }
  },
   //生命周期函数--监听页面初次渲染完成
  onReady: function (e) {
    var that = this;
    //请求数据
    model.updateAreaData(that, 0, e);
  },
  //点击选择城市按钮显示picker-view
  translate: function (e) {
    model.animationEvents(this, 0, true,400);  
  },
  //隐藏picker-view
  hiddenFloatView: function (e) {
    model.animationEvents(this, 200, false,400);
  },
  hiddenFloatViewOk: function (e) {
    model.animationEvents(this, 200, false, 400);
    item = this.data.item;
    this.setData({
      province: item.provinces[item.value[0]].name,
      city: item.citys[item.value[1]].name,
      county: item.countys[item.value[2]].name
    });
  },
  //滑动事件
  bindChange: function (e) {
    model.updateAreaData(this, 1, e);
  },
  onReachBottom: function (){
  },
  nono: function (){}
})
