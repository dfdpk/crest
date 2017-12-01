<template>
	<div class="admin-content-body">
	    <div class="am-cf am-padding am-padding-bottom-0">
	        <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">密码管理</strong> / <small>password</small></div>
	    </div>
	    <hr>
	    <div class="am-tabs am-margin" data-am-tabs>
	        <ul class="am-tabs-nav am-nav am-nav-tabs">
	            <li class="am-active"><a href="#">基本信息</a></li>
	        </ul>
	        <div class="am-tabs-bd">
	            <div class="am-tab-panel am-fade am-in am-active">
	                <form class="am-form" id="password_form">
	                    <div class="am-g am-margin-top">
	                        <div class="am-u-sm-4 am-u-md-2 am-text-right">
	                            用户名
	                        </div>
	                        <div class="am-u-sm-8 am-u-md-4 am-u-end col-end">
	                            <input type="text" name="username" readonly value="{$Think.session.USER.username}" class="am-input-sm">
	                        </div>
	                    </div>
	                    <div class="am-g am-margin-top">
	                        <div class="am-u-sm-4 am-u-md-2 am-text-right">
	                            原密码
	                        </div>
	                        <div class="am-u-sm-8 am-u-md-4 am-u-end col-end">
	                            <input placeholder="请输入原始密码" type="password" name="oldpassword" class="am-input-sm">
	                        </div>
	                    </div>
	                    <div class="am-g am-margin-top">
	                        <div class="am-u-sm-4 am-u-md-2 am-text-right">
	                            新密码
	                        </div>
	                        <div class="am-u-sm-8 am-u-md-4 am-u-end col-end">
	                            <input placeholder="请输入新密码" type="password" name="password" class="am-input-sm">
	                        </div>
	                    </div>
	                    <div class="am-g am-margin-top">
	                        <div class="am-u-sm-4 am-u-md-2 am-text-right">
	                            重新输入
	                        </div>
	                        <div class="am-u-sm-8 am-u-md-4 am-u-end col-end">
	                            <input placeholder="请输入新密码" type="password" name="repassword" class="am-input-sm">
	                        </div>
	                    </div>
	                    <div class="am-margin">
	                        <button type="submit" name="提交" class="am-btn am-btn-primary am-btn-xs" id="password_btn">提交保存</button>
	                    </div>
	                </form>
	            </div>
	        </div>
	    </div>
	</div>
</template>
<script>
	export default {
		name: 'password'
	}
</script>