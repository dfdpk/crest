<template>
	<div class="admin-content-body">
	    <div class="am-cf am-padding am-padding-bottom-0">
	        <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">分类管理</strong> / <small>cate</small></div>
	    </div>
	    <div class="am-cf am-padding am-padding-bottom-0">
	        <a href="/Admin/Cate/add" title="" class="am-btn am-btn-primary am-btn-xs">添加</a>
	    </div>
	    <hr>
	    <div class="am-g">
	        <div class="am-u-sm-12 am-u-md-8">
	            &nbsp;
	        </div>
	    </div>
	    <div class="am-g">
	        <div class="am-u-sm-12">
	            <form class="am-form">
	                <table class="am-table am-table-striped am-table-hover table-main table-wrap">
	                    <thead>
	                        <tr>
	                            <th class="table-id">序号</th>
	                            <th class="table-title">分类id</th>
	                            <th class="table-set">类名</th>
	                            <th class="table-title">类别</th>
	                            <th class="table-title">图片</th>
	                            <th class="table-date am-hide-sm-only">创建时间</th>
	                            <th class="table-set" style="position:relative;">操作<span class="getin-close">收起</span></th>
	                        </tr>
	                    </thead>
	                    <tbody>
	                    	<tr v-if="message.length==0">  
	                            <td colspan="3" class="am-text-center"><a href="#">暂无数据</a></td>  
	                        </tr> 
                            <tr v-else class="cate_tbody" v-for="(mess,index) in message" :key="index">
                                <td>{{ index+1 }}</td>
                                <td><a href="#">{{mess.id}}</a></td>
                                <td>{{mess.name}}</td>
                                <td>{{mess.level}}</td>
                                <td><img v-bind:src="mess.imgurl" alt=""></td>
                                <td class="am-hide-sm-only">{{mess.create_time}}</td>
                                <td>
                                    <div class="am-btn-toolbar">
                                        <div class="am-btn-group am-btn-group-xs">
                                            <a href="#" class="am-btn am-btn-danger am-btn-xs am-hide-sm-only cate_delete" data-id=""><span class="am-icon-trash"></span>&nbsp;删除</a>
                                            <a href="/Admin/Cate/update/id/" class="am-btn am-btn-primary am-btn-xs am-hide-sm-only"><span class="am-icon-pencil-square-o""></span>&nbsp;修改</a>
                                            <eq name="val.level" value="1">
                                            <a href="#" data-id="" class="am-btn am-btn-success am-btn-xs am-hide-sm-only watch_level_two"><span class="am-icon-eye"></span>&nbsp;二级</a>
                                        	</eq>
                                        </div>
                                    </div>
                                </td>
                            </tr>
	                    </tbody>
	                </table>
	                <div id="getin_content"></div>
	            </form>
	                <div class="am-cf">
	                    共  条记录
	                    <div class="am-fr page">
	                        
	                    </div>
	                </div>
	        </div>
	    </div>
	</div>
</template>
<script>

	var jsondata = {
		"result":[
			{id:12,name:"Bob",level:"一级",imgurl:"/static/img/logo.png",create_time:"2017-11-23"}, {id:22,name:"July",level:"一级",imgurl:"/static/img/logo.png",create_time:"2017-11-23"}, {id:31,name:"Jack",level:"一级",imgurl:"/static/img/logo.png",create_time:"2017-11-23"},
			{id:43,name:"Lily",level:"一级",imgurl:"/static/img/logo.png",create_time:"2017-11-23"}
		]
	};
	export default {
		name: 'cate',
		data() {
			return {
			    message: jsondata.result
			}
		}
	}
	//删除模态框
	$(function() {
	  $('#doc-confirm-toggle').on('click', function() {
	    $('#my-confirm').modal({
	      relatedElement: this,
	      onConfirm: function() {
	        alert('您已删除')
	      },
	      onCancel: function() {
	        alert('已取消删除')
	      }
	    });
	  });
	});
</script>