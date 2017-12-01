<template>
	<div id="app">
		<header class="am-topbar am-topbar-inverse admin-header bg1">
	        <div class="am-topbar-brand">
	            <img src="/static/img/logo.png" alt="">
	        </div>
	        <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" data-am-collapse="{target: '#topbar-collapse'}"><span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span></button>
	        <div class="am-collapse am-topbar-collapse" id="topbar-collapse">
	            <ul class="am-nav am-nav-pills am-topbar-nav am-topbar-right admin-header-list">
	                <li><a href="javascript:;"><span class="am-icon-power-off"></span> 注销 </a></li>
	            </ul>
	        </div>
	    </header>
	    <div class="am-cf admin-main">
	        <!-- sidebar start -->
	        	<div class="admin-sidebar am-offcanvas bg1" id="admin-offcanvas">
	                <div class="am-offcanvas-bar admin-offcanvas-bar">
	                    <ul class="am-list admin-sidebar-list">
	                        <li class="nav-list"><router-link to="/"><span class="am-icon-home"></span> 用户管理</router-link>
	                        </li>
	                        <li class="nav-list"><router-link to="/cate"><span class="am-icon-home"></span> 分类管理</router-link>
	                        </li>
	                        <li class="nav-list"><router-link to="/banner"><span class="am-icon-home"></span> banner管理</router-link>
	                        </li>
	                        <li class="nav-list"><router-link to="/wordnew"><span class="am-icon-home"></span> 文字内容管理</router-link>
	                        </li>
	                        <li class="nav-list"><router-link to="/picnew"><span class="am-icon-home"></span> 图文内容管理</router-link>
	                        </li>
	                        <li class="nav-list"><router-link to="/message"><span class="am-icon-home"></span> 留言板</router-link>
	                        </li>
	                        <li class="nav-list"><router-link to="/password"><span class="am-icon-home"></span> 密码管理</router-link></li>
	                    </ul>
	                    <br />
	                    <div class="am-panel am-panel-default admin-sidebar-panel tipbox">
		                    <div class="am-panel-bd">
		                        <p><span class="am-icon-tag"></span> crest教育</p>
		                        <p>Welcome to the crest !</p>
		                    </div>
		                </div>
	                </div>
	            </div>
	        <!-- sidebar end -->
	        <!-- content start -->
	        <div class="admin-content">
	            <router-view></router-view>
	            <footer class="admin-content-footer">
	                <hr>
	                <p class="am-padding-left">© 2017 Crest教育</p>
	            </footer>
	        </div>
	        <!-- content end -->
	    </div>
	    <a href="#" class="am-icon-btn am-icon-th-list am-show-sm-only admin-menu" data-am-offcanvas="{target: '#admin-offcanvas'}"></a>
    </div>
</template>
<script>
	export default {
		name: 'app'
	}
</script>
<style>
	#app {
		width:100%;
		height:100%;
	}
	.router-link-exact-active {
		border-right: 10px solid #21a8e0;
	}
</style>
