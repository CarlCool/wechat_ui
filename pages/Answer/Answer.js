// information.js
Page({
  data: {
    systemInfo: {},
    _api: {},
    navbar: ['看过的问题', '看过的知识'],
    currentNavbar: "",
    themes: [{ name: '小李' }, { name: '小刘' }, { name: '小黄' }],
    list: [],
    hot_last_id: 0,
    latest_list: [],
    latest_last_id: 0
  },
  // swichNav: function (e) {
  //   this.setData({
  //     currentNavbar: e.currentTarget.dataset.idx
  //   })
  //   if (e.currentTarget.dataset.idx == 1 && this.data.latest_list.length == 0) {
  //     // this.pullUpLoadLatest()
  //   }
  // },
  jumpToCourtDetailInfo: function () {
    wx.navigateTo({
      url: "../CourtInfo/CourtInfo",
    })
  },
  //事件处理函数
  // jumpToSubcribeDetail: function () {
  //   wx.navigateTo({
  //     url: "../Subcribe/Subcribe",
  //   })
  // },
  // jumpToCourseDetail: function (event) {
  //   var idx = event.currentTarget.dataset.idx;
  //   console.log(idx);
  //   var item = this.data.themes[idx];
  //   console.log('item = ' + JSON.stringify(item))
  //   if (item.id) {
  //     wx.navigateTo({ url: '../CourtDetail/CourtDetail?id=' + item.id + '&title=' + item.name });
  //   }
  // },
  // handleTap: function (e) {

  //   console.log(e);
  //   let id = e.currentTarget.id;

  //   if (id) {
  //     this.setData({ currentId: id })
  //     this.onLoad();
  //   }


  // },
  // onLoad: function () {
  //   console.log('themes.onLoad');
  //   var that = this;
  //   // 加载数据
  //   wx.request({
  //     url: 'http://news-at.zhihu.com/api/4/themes',
  //     // url: 'https://todaynowork.group/we_chat-0.0.1-SNAPSHOT/coursejson/20170923',
  //     header: { "Content-Type": "application/json" },
  //     success: function (res) {
  //       var data = res.data;
  //       console.log('data = ' + JSON.stringify(data));
  //       var temp = [];
  //       // temp.push({ 'name': '今日热闻', 'thumbnail': null, 'description': '今日热闻' })
  //       for (var i in data.others) {
  //         temp.push(data.others[i]);
  //       }
  //       that.setData({ themes: temp });
  //     },
  //     fail: function (error) {
  //       console.log(error)
  //     }
  //   });
  // },

})