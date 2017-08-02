var config = require('../../config.js'); //导入配置文件

Page({
  data: {
    song: {},  //传入的歌曲信息
    isPlaying: true, //播放状态
  },

  //页面载入事件处理函数
  onLoad: function (options) {
    var songid = options.songid; //获取页面跳转传过来的参数(歌曲对象)
    if (songid === undefined) { //未传入歌曲ID
      var curSong = wx.getStorageSync('curSong') || {}; //从缓存中获取歌曲

      if (curSong === undefined) { //缓存中无歌曲
        var song = { songname: '未选择歌曲' }; //显示未选择歌曲
        this.setData({
          song: song
        })

      } else {
        this.setData({
          song: curSong
        });
      }

    } else {
      var songlist = wx.getStorageSync('songlist') || []; //从缓存中取出歌曲列表
      //在歌曲列表中查找songid指定的歌曲
      for (var i = 0; i < songlist.length; i++) {
        var u = songlist[i].url
        if (songlist[i].songid == songid) {  //找到对应的歌曲        
          this.setData({
            song: songlist[i]   //更新歌曲
          });
          break;
        }
      }
      //缓存正在播放的歌曲
      wx.setStorageSync('curSong', this.data.song);
    }
    console.log(songlist[i].url)
    this.audioC = wx.createAudioContext('myAudio')
    this.audioC.setSrc(u)
    this.audioC.play()
  },

  //播放/暂停
  playToggle: function () {
    //没有歌曲要播放，则直接退出


    if (this.data.isPlaying) { //正在播放 
      this.audioC.pause()
    } else {//未播放，则开始播放 
      //播放歌曲
      this.audioC.play()
    }

    //更新播放状态
    this.setData({
      isPlaying: !this.data.isPlaying
    });
  }
})