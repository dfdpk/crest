<template>
    <div class="admin-content-body">
        <div class="am-cf am-padding am-padding-bottom-0">
            <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">banner管理</strong> / <small>banner</small></div>
        </div>
        <div class="am-cf am-padding am-padding-bottom-0">
            <a href="/Admin/Banner/add" title="" class="am-btn am-btn-primary am-btn-xs">添加</a>
        </div>
        <hr>
        <div class="am-g">
            <div class="am-u-sm-12 am-u-md-8">
                &nbsp;
            </div>
        </div>
        <div class="am-g">
            <div class="am-u-sm-12">
                <table class="am-table am-table-striped am-table-hover table-main">
                    <thead>
                        <tr>
                            <th class="table-id">序号</th>
                            <th class="table-title">分类id</th>
                            <th class="table-set">banner图</th>
                            <th class="table-title">网址</th>
                            <th class="table-title">状态</th>
                            <th class="table-date am-hide-sm-only">创建时间</th>
                            <th class="table-set">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="message.length==0">  
                            <td colspan="3" class="am-text-center"><a href="#">暂无数据</a></td>  
                        </tr> 
                        <tr v-else v-for="(mess,index) in message" :key="index">
                            <td>{{index+1}}</td>
                            <td><a href="#">{{mess.cate_id}}</a></td>
                            <td><img width="100" :src="mess.imgurl" alt=""></td>
                            <td>{{mess.link}}</td>
                            <td>
                                
                                <a v-if="mess.status==1">
                                    开启
                                </a>
                        		<a v-else> 关闭 </a>
                                
                            </td>
                            <td>{{mess.create_time}}</td>
                            <td>
                                <div class="am-btn-toolbar">
                                    <div class="am-btn-group am-btn-group-xs">
                                        <a href="#" class="am-btn am-btn-danger am-btn-xs banner_delete" data-id=""><span class="am-icon-trash"></span>&nbsp;删除</a>
                                        <a href="/Admin/Banner/update/id/" class="am-btn am-btn-primary am-btn-xs"><span class="am-icon-pencil-square-o""></span>&nbsp;修改</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="am-cf">
                    <!-- 共  条记录 -->
                    <div class="am-fr page">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
	var jsondata= {
		"result" : [
			{cate_id:23,imgurl:"/static/img/logo.png",link:"http://www.crestbj.com",create_time:"2017-11-23",status:1},
			{cate_id:13,imgurl:"/static/img/logo.png",link:"http://www.crestbj.com",create_time:"2017-11-23",status:2},
			{cate_id:34,imgurl:"/static/img/logo.png",link:"http://www.crestbj.com",create_time:"2017-11-23",status:1}
		]
	}
	export default {
		name :'banner',
		data () {
			return {
				message: jsondata.result
			}
		}
	}
</script>