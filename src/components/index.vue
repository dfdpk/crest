<template>
	<div class="admin-content-body">
	    <div class="am-cf am-padding am-padding-bottom-0">
	        <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">用户管理</strong> / <small>user</small></div>
	    </div>
	    <hr>
	    <div class="am-g">
	        <div class="am-u-sm-12">
	            <form class="am-form">
	                <table class="am-table am-table-striped am-table-hover table-main">
	                    <thead>
	                        <tr>
	                            <th class="table-check">
	                                <input type="checkbox" />
	                            </th>
	                            <th class="table-id">ID</th>
	                            <th class="table-title">姓名</th>
	                            <th class="table-type">手机号</th>
	                            <th class="table-author am-hide-sm-only">职务</th>
	                            <th class="table-date am-hide-sm-only">单位名称</th>
	                            <th class="table-set">操作</th>
	                        </tr>
	                    </thead>

	                    <tbody>
	                    	<tr v-if="message.length==0">  
	                            <td colspan="3" class="am-text-center"><a href="#">暂无数据</a></td>  
	                        </tr> 
	                        <tr v-else v-for="mess in message">
	                            <td>
	                                <input type="checkbox" />
	                            </td>
	                            <td>{{mess.id}}</td>
	                            <td><a href="#">{{mess.name}}</a></td>
	                            <td>{{mess.tel}}</td>
	                            <td class="am-hide-sm-only">{{mess.job}}</td>
	                            <td class="am-hide-sm-only">{{mess.company}}</td>
	                            <td>
	                                <div class="am-btn-toolbar">
	                                    <div class="am-btn-group am-btn-group-xs">
	                                        <a href="#" class="am-btn am-btn-default am-btn-xs am-text-secondary eyeBtn" data-am-modal="{target: '#my-popup'}"><span class="am-icon-eye"></span> 查看</a>
	                                        <a href="#" class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only" id="doc-confirm-toggle"><span class="am-icon-trash-o"></span> 删除</a>
	                                    </div>
	                                </div>
	                            </td>
	                        </tr>
	                    </tbody>
	                </table>
	                <div class="am-popup" id="my-popup">
	                  <div class="am-popup-inner">
	                    <div class="am-popup-hd">
	                      <h4 class="am-popup-title">用户信息</h4>
	                      <span data-am-modal-close
	                            class="am-close">&times;</span>
	                    </div>
	                    <div class="am-popup-bd">
	                      	<ul v-for="mess in message">
	                      		<li>{{mess.name}}</li>
	                      		<li>{{mess.tel}}</li>
	                      		<li>{{mess.job}}</li>
	                      		<li>{{mess.company}}</li>
	                      	</ul>
	                    </div>
	                  </div>
	                </div>
	                <div class="am-modal am-modal-confirm" tabindex="-1" id="my-confirm">
	                  <div class="am-modal-dialog">
	                    <div class="am-modal-hd">Amaze UI</div>
	                    <div class="am-modal-bd">
	                      你确定要删除吗?
	                    </div>
	                    <div class="am-modal-footer">
	                      <span class="am-modal-btn" data-am-modal-cancel>取消</span>
	                      <span class="am-modal-btn" data-am-modal-confirm>确定</span>
	                    </div>
	                  </div>
	                </div>
	                <div class="am-cf">
	                    共 15 条记录
	                    <div class="am-fr">
	                        <ul class="am-pagination">
	                            <li class="am-disabled"><a href="#">«</a></li>
	                            <li class="am-active"><a href="#">1</a></li>
	                            <li><a href="#">2</a></li>
	                            <li><a href="#">3</a></li>
	                            <li><a href="#">4</a></li>
	                            <li><a href="#">5</a></li>
	                            <li><a href="#">»</a></li>
	                        </ul>
	                    </div>
	                </div>
	            </form>
	        </div>
	    </div>
	</div>
</template>
<script>

	var jsondata = {
		"result":[
			{id:1,name:"Bob",tel:"13677777777",job:"医生",company:"山西大医院"},
			{id:2,name:"July",tel:"13677777777",job:"医生",company:"山西大医院"},
			{id:3,name:"Jack",tel:"13677777777",job:"医生",company:"山西大医院"},
			{id:4,name:"Lily",tel:"13677777777",job:"医生",company:"山西大医院"}
		]
	};
	export default {
		name: 'index',
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