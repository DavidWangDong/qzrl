<template>
  <div class="picer">
  	<div class="leader_dynamic clearfix">
            <div class="leader_avater">
                <img :src="dataList.avatar" alt="">
            </div>
            <div class="leader_info">
                <p class="inner_name">{{dataList.name}}</p>
                <span class="leader_level">{{dataList.title}}</span>
            </div>
            <router-link class="leader_more" to="/">
                <p class="inner_more">返回</p>
                <span class="btn_right"></span>
            </router-link>
    </div>
    <div id="datepicker"></div>
    <div class="things">
    	<ul class="things_ul clearfix"> 
	    	<li class="dynamic" v-for='(val,index) in getThing'> 
	    		<span class="point"></span> 
	    		<p class="dynamic_content">{{val}}</p> 
	    	</li>  
    	</ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'datepicer',
  created:function(){
    
    var that=this;
    // $.ajax({
    //   url:'http://ahfensitong.com/qzrl/api.php?action=getRili',
    //   data:{jsonp:1,pid:this.$route.params.id},
    //   type:'GET',
    //   dataType:'jsonp',
    //   success:function(val){

    //     if (!!!val.errorno){
    //       Object.keys(val.data).forEach(function(index){
    //         that.dataList[index]=JSON.parse(JSON.stringify(val.data[index]))
    //       })
    //       console.log(that.dataList);
    //       return;
    //     }
    //   }
    // })

  },
  data () {
    return {
    	datepicker:null,
    	currContent:'',
    	dataList:{
    		name:'测试1',
    		pid:1,
    		title:'书记',
    		avatar:'http://n.sinaimg.cn/news/transform/20170928/7cdI-fymkwyr9637839.png',
    		contentList:[
    				{content:'啥打法上的',date:'2017/10/01'},
    				{content:'',day:'2017/10/02'},
    				{content:'',day:'2017/10/03'},
    				{content:'',day:'2017/10/04'},
    				{content:'',day:'2017/10/05'},
    				{content:'',day:'2017/10/06'},
    				{content:'',day:'2017/10/07'},
    				{content:'',day:'2017/10/08'},
    				{content:'',day:'2017/10/09'},
    				{content:'',day:'2017/10/10'},
    				{content:'',day:'2017/10/11'},
    				{content:'',day:'2017/10/12'},
    				{content:'',day:'2017/10/13'},
    				{content:'',day:'2017/10/14'},
    				{content:'',day:'2017/10/15'},
    				{content:'',day:'2017/10/16'},
    			],
    	},
    }
  },
  computed:{
  	getThing:function () {
  		return this.currContent==''?['暂无公开报道']:this.currContent.split('#qzrl#');
  	}
  },
  mounted : function () {
  	var that = this;
  	$.datepicker.regional['zh-CN'] = {  
        closeText: '关闭',  
        prevText: '<上月',  
        nextText: '下月>',  
        currentText: '今天',  
        monthNames: ['一月','二月','三月','四月','五月','六月',  
        '七月','八月','九月','十月','十一月','十二月'],  
        monthNamesShort: ['一','二','三','四','五','六',  
        '七','八','九','十','十一','十二'],  
        dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],   
        dayNamesMin: ['日','一','二','三','四','五','六'],
        dateFormat: 'yy-mm-dd',  
        firstDay: 1,  
        isRTL: false,  
        showMonthAfterYear: true, 
        showOtherMonths:true, 
        onSelect:that.showText,
        beforeShowDay:that.showDay,
        onChangeMonthYear:that.getByY,
        yearSuffix: '年'};  
     $.datepicker.setDefaults($.datepicker.regional['zh-CN']);  
	 $( "#datepicker" ).datepicker();
	 this.datepicker=$( "#datepicker" );
    $.ajax({
      url:'http://ahfensitong.com/qzrl/api.php?action=getRili',
      data:{jsonp:1,pid:this.$route.params.id,month:new Date().getMonth()+1,year:new Date().getFullYear()},
      type:'GET',
      dataType:'jsonp',
      success:function(val){
        if (!!!val.errorno){
          Object.keys(val.data).forEach(function(index){
            that.dataList[index]=JSON.parse(JSON.stringify(val.data[index]))
          })
          that.datepicker.datepicker('refresh');
          return;
        }
      }
    })
   
  },
  methods:{
  	showText:function(time){
  		var timeStr = time.split('-').join('/');
  		
  		var res = this.isInArray(timeStr);
      if (!res.flag1){
  			return;
  		}
  		if (!res.flag2){
        this.currContent="暂无公开报道"
  			return;
  		}
  		
  		this.currContent = this.dataList.contentList[res.index].content;
  	},
  	getByY:function(y,m){
      var that = this;
      $.ajax({
      url:'http://ahfensitong.com/qzrl/api.php?action=getRili',
      data:{jsonp:1,pid:this.$route.params.id,month:m,year:y},
      type:'GET',
      dataType:'jsonp',
      success:function(val){

        if (!!!val.errorno){
          Object.keys(val.data).forEach(function(index){
            that.dataList[index]=JSON.parse(JSON.stringify(val.data[index]))
          })
          
          that.datepicker.datepicker('refresh');
          return;
        }
      }
    })
  		// this.datepicker.datepicker('refresh');
  	},
  	getPositionByDate:function(){
  	},
  	showDay:function(time){
  		var y = time.getFullYear();
  		var m = time.getMonth()+1;
  		var d = time.getDate();
  		m=m>=10?m:('0'+m);
  		d=d>=10?d:('0'+d);
  		var timeStr = y+'/'+m+'/'+d;
      var obj = this.isInArray(timeStr);
  		var flag1 = obj.flag1;
  		var flag2 = obj.flag2;
  		return [flag1,flag2?'':'noneAfter',''];
  	},
  	isInArray:function(time){

  		var tmpArr = this.dataList.contentList.map(function(val){
  			return val.day;
  		})
      var dis = new Date(time).getTime()<Date.now()
  		var flag1 = $.inArray(time,tmpArr)>-1||dis?true:false
  		var index=$.inArray(time,tmpArr);
  		return {flag1:flag1,flag2:index>-1&&(!!this.dataList.contentList[index].content),index:index}
  	},
  	// renderTd(){
  	// 	var tds = this.datepicker.find('tbody td');
  	// 	var that = this;
  	// 	tds.each(function(index,val){
  	// 		if (!!!$(val).attr('data-year')){
  	// 			return;
  	// 		}
  	// 		val.className='';
  	// 		$(val).addClass('noneAfter');
  	// 		var dayStr = $(val).attr('data-year')+'/'+($(val).attr('data-month')-0+1)+'/'+$(val).find('a').text();
  	// 		that.dataList.data.forEach(function(item){
  	// 			var day1 = new Date(item.date).getTime();
  	// 			var day2 = new Date(dayStr).getTime();
  	// 			if (day1 == day2){
  	// 				$(val).removeClass('noneAfter')
  	// 			}
  	// 		})
  	// 	})
  	// }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .picer{
 	width: 6.4rem;
 }
 #datepicker{
 	width: 100%;
 }
</style>
