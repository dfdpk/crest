<template>
	<div class="admin-content-body">
	    <div class="am-cf am-padding am-padding-bottom-0">
	        <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">留言板</strong> / <small>message</small></div>
	    </div>
	    <hr>
	    <div class="am-g">
	        <div class="am-u-sm-12 am-u-md-8">
	            &nbsp;
	        </div>
	        <div class="am-u-sm-12 am-u-md-2">
	        </div>
	    </div>
	    <div class="am-g">
	        <div class="am-u-sm-12">
	            <form class="am-form">
	                <table class="am-table am-table-striped am-table-hover table-main">
	                    <thead>
	                        <tr>
	                        	<th class="table-id">序号</th>
	                            <th class="table-title">姓名</th>
	                            <th class="table-set">留言内容</th>
	                            <th class="table-title">手机号码</th>
	                            <th class="table-title">邮箱地址</th>
	                            <th class="table-title">意向城市</th>
	                            <th class="table-date am-hide-sm-only">创建时间</th>
	                            <th class="table-set">操作</th>
	                        </tr>
	                    </thead>
	                    <tbody>
                            <tr v-for="(mess,index) in messagelist" :key="index">
                            	<td>{{index+1}}</td>
                                <td><a href="#">{{mess.username}}</a></td>
                                <td>{{mess.message}}</td>
                                <td>{{mess.phone}}</td>
                                <td>{{mess.email}}</td>
                                <td>{{mess.city}}</td>
                                <td>{{mess.create_time}}</td>
                                <td>
                                    <div class="am-btn-toolbar">
                                        <div class="am-btn-group am-btn-group-xs">
                                            <a href="#"  data-id="{$val.id}" class="am-btn am-btn-danger am-btn-xs am-hide-sm-only message_delete"><span class="am-icon-trash"></span>&nbsp;删除</a>
                                            <!-- <a href="/Admin/Picnew/update/id/{$val.id}/p/{$p}/cate/{$cate}" class="am-btn am-btn-default am-btn-xs am-hide-sm-only"><span class="am-icon-copy"></span>修改</a> -->
                                        </div>
                                    </div>
                                </td>
                            </tr>
	                    </tbody>
	                </table>
	                <div class="am-cf">
	                    共  条记录
	                    <div class="am-fr page">
	                    </div>
	                </div>
	            </form>
	        </div>
	    </div>
	</div>
</template>
<script>
	var jsondata = {
		"result" : [
			{username:"看似",message:"防守对方家里的时间",phone:"13655555555",email:"dangfengdang@163.com",city:"山西",create_time:"2017-11-23"},
			{username:"看似",message:"防守对方家里的时间",phone:"13655555555",email:"dangfengdang@163.com",city:"山西",create_time:"2017-11-23"},
			{username:"看似",message:"防守对方家里的时间",phone:"13655555555",email:"dangfengdang@163.com",city:"山西",create_time:"2017-11-23"},
			{username:"看似",message:"防守对方家里的时间",phone:"13655555555",email:"dangfengdang@163.com",city:"山西",create_time:"2017-11-23"}
		]
	}
	export default {
		name:"message",
		data() {
			return {
				messagelist:jsondata.result
			}
		}
	}
</script>