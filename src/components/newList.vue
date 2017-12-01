<template>
  <div class="list">
    <div class="listHead picContain">
      <img src="../assets/pic1.jpg">
    </div>
    <div class="listWrap pos_rel">
        <div :class="['navBarBox','pos_abs','boxShadow',{'open':navOpen}]" ref="navBox">
            <button class="navShowBtn pos_abs" @click="openNav"></button>
            <div class="navBar-title pos_rel">全部城市
              <button class="navCloseBtn pos_abs" @click="closeNav"></button>
            </div>
            <ul class="listOuter">
                <li :class="['navItem',{active:getActiveCity(index)}]" v-for="(val,index) in cityList" @click="toItem(index)" ref="navli">{{val}}</li>
            </ul>
        </div>
    </div>
    <div class="contentListWrap">
      <div class="contentItem" v-for="(item,index1) in dataList" ref="contentItem">
        <div class="faceBox-all">
            <div class="faceBox">
                <img :src="item.avatar">
            </div>
            <p class="title">{{item.title}}</p>
            <p class="name">{{item.name}}</p>
            <router-link class="date-more" :to="{ name: 'datepicer', params: { id:item.pid-0-1}}"><i class="date-icon"></i></router-link>
        </div>
        <ul class="dayListBox">
          <li class="dayList" v-for="(content,index) in getCurrent(item.contentList)" @click="openShe($event,content,index1,index)" :ref='"li"+index1+index'>
              <p class="p-top">
                  <em class="dayName" data-day="20171012">{{content.day}}</em>
                  <em class="weekName">{{content.weekDay}}</em>
                  <i class="handle down" v-if = "content.content?true:false"></i>
              </p>

              <p class="p-no-text con" v-if = "content.content==''">无动向</p>
              <p class="p-text con" v-else v-for="(val,dex) in brFil(content.content)">
                {{val}}
              </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newList',
  created:function(){
    var that=this;
    $.ajax({
      url:'http://ahfensitong.com/qzrl/api.php?action=getRicheng',
      data:{jsonp:1},
      type:'GET',
      dataType:'jsonp',
      success:function(val){

        if (!!!val.errorno){
          that.dataList.length=0;
          let deletes=['15'];
          
          Object.keys(val.data).forEach(function(index){
            if (deletes.indexOf(index)<=-1){
              that.dataList.push(JSON.parse(JSON.stringify(val.data[index])))
            }
          })
          return;
        }
      }
    })
  },
  data () {
    return {
      cityList:["合肥市","蚌埠市","芜湖市","淮南市","马鞍山","淮北市","铜陵市","安庆市","黄山市","阜阳市","宿州市","滁州市","六安市","宣城市","池州市","亳州市"],
      dataList:[
        {
          name:'韩正',
          title:'上海市委书记',
          avatar:'http://n.sinaimg.cn/news/transform/20170928/7cdI-fymkwyr9637839.png',
          pid:1,
          contentList:[
            {day:'2017-10-12',content:'你好'},
            {day:'2017-10-11',content:'你好啊'},
            {day:'2017-10-10',content:''},
            {day:'2017-10-9',content:'了空间来看过来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的蓝思科技的根深蒂固'}
          ],
        },
        {
          name:'韩正',
          title:'上海市委书记',
          pid:2,
          avatar:'http://n.sinaimg.cn/news/transform/20170928/7cdI-fymkwyr9637839.png',
          contentList:[
            {day:'2017-10-12',content:'你好'},
            {day:'2017-10-11',content:'你好啊'},
            {day:'2017-10-10',content:''},
            {day:'2017-10-9',content:'了空间来看过来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的蓝思科技的根深蒂固'}
          ],
        },
        {
          name:'韩正',
          title:'上海市委书记',
          pid:3,
          avatar:'http://n.sinaimg.cn/news/transform/20170928/7cdI-fymkwyr9637839.png',
          contentList:[
            {day:'2017-10-12',content:'你好'},
            {day:'2017-10-11',content:'你好啊'},
            {day:'2017-10-10',content:''},
            {day:'2017-10-9',content:'了空间来看过来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的蓝思科技的根深蒂固'}
          ],
        },
        {
          name:'韩正',
          title:'上海市委书记',
          pid:4,
          avatar:'http://n.sinaimg.cn/news/transform/20170928/7cdI-fymkwyr9637839.png',
          contentList:[
            {day:'2017-10-12',content:'你好'},
            {day:'2017-10-11',content:'你好啊'},
            {day:'2017-10-10',content:''},
            {day:'2017-10-9',content:'了空间来看过来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的蓝思科技的根深蒂固'}
          ],
        },
        {
          name:'韩正',
          title:'上海市委书记',
          pid:5,
          avatar:'http://n.sinaimg.cn/news/transform/20170928/7cdI-fymkwyr9637839.png',
          contentList:[
            {day:'2017-10-12',content:'你好'},
            {day:'2017-10-11',content:'你好啊'},
            {day:'2017-10-10',content:''},
            {day:'2017-10-9',content:'了空间来看过来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的蓝思科技的根深蒂固'}
          ],
        },
        {
          name:'韩正',
          title:'上海市委书记',
          pid:6,
          avatar:'http://n.sinaimg.cn/news/transform/20170928/7cdI-fymkwyr9637839.png',
          contentList:[
            {day:'2017-10-12',content:'你好'},
            {day:'2017-10-11',content:'你好啊'},
            {day:'2017-10-10',content:''},
            {day:'2017-10-9',content:'了空间来看过来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的蓝思科技的根深蒂固'}
          ],
        },
        {
          name:'韩正',
          title:'上海市委书记',
          pid:7,
          avatar:'http://n.sinaimg.cn/news/transform/20170928/7cdI-fymkwyr9637839.png',
          contentList:[
            {day:'2017-10-12',content:'你好'},
            {day:'2017-10-11',content:'你好啊'},
            {day:'2017-10-10',content:''},
            {day:'2017-10-9',content:'了空间来看过来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的蓝思科技的根深蒂固'}
          ],
        },
        {
          name:'韩正',
          title:'上海市委书记',
          pid:8,
          avatar:'http://n.sinaimg.cn/news/transform/20170928/7cdI-fymkwyr9637839.png',
          contentList:[
            {day:'2017-10-12',content:'你好'},
            {day:'2017-10-11',content:'你好啊'},
            {day:'2017-10-10',content:''},
            {day:'2017-10-9',content:'了空间来看过来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的蓝思科技的根深蒂固'}
          ],
        },
        {
          name:'韩正',
          title:'上海市委书记',
          pid:9,
          avatar:'http://n.sinaimg.cn/news/transform/20170928/7cdI-fymkwyr9637839.png',
          contentList:[
            {day:'2017-10-12',content:'你好'},
            {day:'2017-10-11',content:'你好啊'},
            {day:'2017-10-10',content:''},
            {day:'2017-10-9',content:'了空间来看过来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的蓝思科技的根深蒂固'}
          ],
        },
        {
          name:'韩正',
          title:'上海市委书记',
          pid:10,
          avatar:'http://n.sinaimg.cn/news/transform/20170928/7cdI-fymkwyr9637839.png',
          contentList:[
            {day:'2017-10-12',content:'你好'},
            {day:'2017-10-11',content:'你好啊'},
            {day:'2017-10-10',content:''},
            {day:'2017-10-9',content:'了空间来看过来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的蓝思科技的根深蒂固'}
          ],
        },
        {
          name:'韩正',
          title:'上海市委书记',
          pid:11,
          avatar:'http://n.sinaimg.cn/news/transform/20170928/7cdI-fymkwyr9637839.png',
          contentList:[
            {day:'2017-10-12',content:'你好'},
            {day:'2017-10-11',content:'你好啊'},
            {day:'2017-10-10',content:''},
            {day:'2017-10-9',content:'了空间来看过来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的蓝思科技的根深蒂固'}
          ],
        },
        {
          name:'韩正',
          title:'上海市委书记',
          pid:12,
          avatar:'http://n.sinaimg.cn/news/transform/20170928/7cdI-fymkwyr9637839.png',
          contentList:[
            {day:'2017-10-12',content:'你好'},
            {day:'2017-10-11',content:'你好啊'},
            {day:'2017-10-10',content:''},
            {day:'2017-10-9',content:'了空间来看过来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的蓝思科技的根深蒂固'}
          ],
        },
        {
          name:'韩正',
          title:'上海市委书记',
          pid:13,
          avatar:'http://n.sinaimg.cn/news/transform/20170928/7cdI-fymkwyr9637839.png',
          contentList:[
            {day:'2017-10-12',content:'你好'},
            {day:'2017-10-11',content:'你好啊'},
            {day:'2017-10-10',content:''},
            {day:'2017-10-9',content:'了空间来看过来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的蓝思科技的根深蒂固'}
          ],
        },
        {
          name:'韩正',
          title:'上海市委书记',
          pid:14,
          avatar:'http://n.sinaimg.cn/news/transform/20170928/7cdI-fymkwyr9637839.png',
          contentList:[
            {day:'2017-10-12',content:'你好'},
            {day:'2017-10-11',content:'你好啊'},
            {day:'2017-10-10',content:''},
            {day:'2017-10-9',content:'了空间来看过来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的蓝思科技的根深蒂固'}
          ],
        },
        {
          name:'韩正',
          title:'上海市委书记',
          pid:15,
          avatar:'http://n.sinaimg.cn/news/transform/20170928/7cdI-fymkwyr9637839.png',
          contentList:[
            {day:'2017-10-12',content:'你好'},
            {day:'2017-10-11',content:'你好啊'},
            {day:'2017-10-10',content:''},
            {day:'2017-10-9',content:'了空间来看过来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的蓝思科技的根深蒂固'}
          ],
        },
        {
          name:'韩正',
          title:'上海市委书记',
          pid:16,
          avatar:'http://n.sinaimg.cn/news/transform/20170928/7cdI-fymkwyr9637839.png',
          contentList:[
            {day:'2017-10-12',content:'你好'},
            {day:'2017-10-11',content:'你好啊'},
            {day:'2017-10-10',content:''},
            {day:'2017-10-9',content:'了空间来看过来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的蓝思科技的根深蒂固'}
          ],
        },
        {
          name:'韩正',
          title:'上海市委书记',
          pid:17,
          avatar:'http://n.sinaimg.cn/news/transform/20170928/7cdI-fymkwyr9637839.png',
          contentList:[
            {day:'2017-10-12',content:'你好'},
            {day:'2017-10-11',content:'你好啊'},
            {day:'2017-10-10',content:''},
            {day:'2017-10-9',content:'了空间来看过来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的来说空间的蓝思科技的根深蒂固'}
          ],
        },
      ],
      navOpen:false,
      activeIndex:0
    }
  },
  computed:{

  },
  
  mounted:function (){
    var timer  = null;
    var navFalg = false;
    var that = this;
    console.log(this.dataList.length);
    $(document).on('scroll',function(e){
        if (!!!$('.navBarBox')[0]){
          return;
        }
        var limitTop = $('.navBarBox')[0].getBoundingClientRect().top;
        var bodyTop = $(document).scrollTop();
        !timer&&(timer=setTimeout(function(){
          clearTimeout(timer);
          timer=null;
          if (bodyTop>60&&!navFalg){
             $('.navBarBox').css({'position':'fixed'});
             navFalg=true;
          }else if(bodyTop<60&&navFalg){
             $('.navBarBox').css({'position':'absolute'});
             navFalg=false;
          }
          that.getLimit();
        },20))
       
    })
  },
  filters:{
    isEmpty :function(val){
      return val?val:'无动向';
    },
    
  },
  methods:{
    closeNav:function () {
      this.navOpen = false;
      $('.navBarBox').removeClass('open');
      this.getLimit();
      $('.navBarBox').css({height:'0.69rem'});
    },
    brFil:function(str){
      var list = [];
      list = str.split('#qzrl#');
      return list;
    },
    openNav:function () {
      this.navOpen = true;
      $('.navBarBox').css({height:'3rem'})
      $('.listOuter').css({'transform':'translateY(0px)'})
    },
    getActiveCity:function(index){
      return this.activeIndex==index;
    },
    getCurrent:function(list){
      var that = this;
      var tmpList = list.map(function(val){
        return {day:that.getLocal(val.day),weekDay:that.getWeek(val.day),content:val.content}
      })
      return tmpList;
    },
    getLocal:function(day){
      var timeObject = new Date(day);
      var tmpDay = timeObject.getDate();
      var tmpMon = timeObject.getMonth();
      var currDay = (tmpDay>=10?(tmpDay):('0'+tmpDay))+'日';
      var currMounth = (tmpMon+1>=10?(tmpMon+1):('0'+(tmpMon+1)))+'月';
      return currMounth+currDay;
    },
    getWeek:function(day){
      var timeObject = new Date(day);
      var currWeek = timeObject.getDay();
      var weekList = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
      return weekList[currWeek];
    },
    openShe:function(e,content,index1,index){
      if (!!!content.content){
        return;
      }
      var li = this.$refs['li'+index1+index][0];
      $(li).find('.handle').toggleClass('up');
      $(li).find('.handle').toggleClass('down');
      $(li).find('.p-text').toggleClass('active_con');
    },
    toItem:function(index){

      var content = this.$refs.contentItem[index];
      $(document).scrollTop(content.offsetTop-window.root_size*0.92);
      this.closeNav();
      this.$refs.navli.forEach(function(item){
        $(item).removeClass('active')
      })
      $(this.$refs.navli[index]).addClass('active');
    },
    getLimit : function(){
      var that=this;
      var bestlimit = 100; 
          that.$refs['contentItem'].forEach(function(item,index){
            var top = item.getBoundingClientRect().top;
            var bottom = item.getBoundingClientRect().bottom;
            if (top<100&&bottom>100){

                that.$refs.navli.forEach(function(item1){
                  $(item1).removeClass('active')
                })
                $(that.$refs.navli[index]).addClass('active');
                !$('.navBarBox').hasClass('open')&&$('.listOuter').css({'transform':'translateY(-'+Math.floor(index/6)*0.69*window.root_size+'px)'})
                return false;
                
            }
          })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list{
    width: 100%;
  }
  .listHead{
    width: 100%;
  }
  .listWrap{
    width: 100%;
    padding-top: 0.69rem;
  }
  .navBarBox{
    width: 100%;
    height: 0.69rem;
    top:0;
    overflow: hidden;
    transition:all .3s linear;
    z-index: 999;
  }
  .navBarBox.open{
    height: 3rem;
  }
  .open .navShowBtn{
    display: none;
  }
  .open .navBar-title{
    display: block;
  }
  .navBar-title{
        width: 5.52rem;
    text-align: center;
    font-size: .28rem;
    color: #333;
    line-height: .69rem;
    border-bottom: 1px solid #ededed;
    margin: 0 auto;
    display: none;
  }
  .open .listOuter{
    margin-left: 0.39rem;
  }
  .listOuter{
    width: 5.52rem;
    margin-left: 0.19rem;
    overflow: hidden;
    transition: transform .3s;
  }
  .navItem{
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.69rem;
    color: #000;
    float: left;
    width: 0.92rem;
  }
  .navItem.active{
    color: #a20000;
  }
  .navShowBtn{
    right: .46rem;
    top: .22rem;
    z-index: 500;
    width: .26rem;
    height: .26rem;
    padding: .07rem;
        background: none;
    background: url(../assets/xiala-c34c93.png);
    background-size: 100% 100%;
        border: none;

  }
  .open .navCloseBtn{
    display: block;
  }
  .navCloseBtn{
    background: none;
    background-image: url(../assets/normal-sprite-bba3bf.png);
    background-size: 2.02rem auto;
    background-position: -1.32rem -1.06rem;
    width: .34rem;
    height: .34rem;
    top: .22rem;
    border: none;
    outline: none;
    right: 0.3rem;
    display: none;
  }
  .contentListWrap{
    width: 6.4rem;
    margin: 0 auto;
    margin-top: .2rem;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.08);
    border-radius: 5px;
  }
  .contentItem{
    width: 100%;
    padding-top:0.1rem;
    padding-bottom: 0.2rem; 
    margin-bottom: 0.2rem;
    background: #fff;
  }
  .faceBox-all {
    width: 5.68rem;
    height: 1.42rem;
    margin: .2rem .3rem 0 .6rem;
    position: relative;
}
.faceBox {
    width: 1.4rem;
    height: 1.4rem;
    overflow: hidden;
    border-radius: 23%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #d8d8d8;
}
.faceBox img{
  display: block;
  width: 100%;
  height: 100%;
}
.name, .title {
    position: absolute;
    left: 1.68rem;
}
.title {
    font-size: .26rem;
    color: #999;
    top: .82rem;
}
.name {
    font-size: .34rem;
    color: #333;
    top: .24rem;
}
.date-more {
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -.5rem;
}
.date-more i.date-icon {
    display: inline-block;
    background-image: url(http://simg.sinajs.cn/products/news/items/2017/leading_daily_trends/img/normal-sprite-bba3bf.png);
    background-size: 2.02rem auto;
    background-position: 0 0;
    width: 1rem;
    height: 1rem;
}
.dayListBox {
    width: 6.4rem;
    border-bottom: 1px solid #ededed;
    margin: .28rem 0 0 0rem;
    overflow: hidden;
    /*float: left;*/
}
.dayList {
    width:100%;
    padding: .16rem 0 0 .05rem;
    border-top: 1px solid #ededed;
    margin-bottom: .14rem;
    position: relative;
}
.dayList .p-top {
    width: 100%;
    overflow: hidden;
    position: relative;
}
.dayList .dayName {
    display: block;
    padding: 0 .12rem;
    height: .32rem;
    line-height: .34rem;
    text-align: center;
    background: #a20000;
    border-radius: 4px;
    font-size: 13px;
    color: #fff;
    margin-left: .24rem;
    float: left;
}
.dayList em {
    font-style: normal;
}
.dayList .weekName {
    display: block;
    font-size: 13px;
    color: #999;
    margin-left: .1rem;
    float: left;
}
.dayList .p-no-text {
    width: 6.1rem;
    color: #c8c8c8;
}
.dayList .p-no-text, .dayList .p-text {
    font-size: 14px;
    letter-spacing: 0;
    line-height: 26px;
    margin: .12rem 0 0 .24rem;
}
.dayList .con {
    min-height: 1rem;
    max-height: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
}
.dayList .active_con {
    max-height: 20rem;
    -webkit-line-clamp: inherit;
}
.dayList .p-text {
    width: 6.14rem;
    color: #333;
}
.dayList i.down {
    width: .2rem;
    height: .22rem;
    background: url(http://simg.sinajs.cn/products/news/items/2017/leading_daily_trends/img/down-fc2285.png);
    background-size: 100% 100%;
}
.dayList i.handle {
    position: absolute;
    top: .02rem;
    right: .2rem;
}
.dayList i.up {
    width: .2rem;
    height: .22rem;
    background: url(http://simg.sinajs.cn/products/news/items/2017/leading_daily_trends/img/up-5e863f.png);
    background-size: 100% 100%;
}
</style>
