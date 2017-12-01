<template>
	 <div class="admin-content-body">
        <div class="am-cf am-padding am-padding-bottom-0">
            <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">图文内容管理</strong> / <small>picnew</small></div>
        </div>
        <div class="am-cf am-padding am-padding-bottom-0">
            <a href="/Admin/Picnew/add" title="" class="am-btn am-btn-primary am-btn-xs">添加</a>
        </div>
        <div class="am-cf am-padding am-padding-bottom-0">
            <a class='am-btn am-btn-success am-btn-xs mr10 add-btn' href="#" v-for="(mess,index in message" :class="{'am-active':ind === index}" @click="changeBgc(index)">{{mess.title}}</a>&nbsp;
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
                    <table class="am-table am-table-striped am-table-hover table-main">
                        <thead>
                            <tr>
                                <th class="table-id">序号</th>
                                <th class="table-title">id</th>
                                <th class="table-title">分类id</th>
                                <th class="table-set">标题</th>
                                <th class="table-title">副标题</th>
                                <th class="table-title am-hide-sm-only">新闻内容</th>
                                <th class="table-title">图片</th>
                                <th class="table-title">价格</th>
                                <th class="table-title">备注</th>
                                <th class="table-title">状态</th>
                                <th class="table-date">创建时间</th>
                                <th class="table-set">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(mess,index in message" :key="index">
                                <td>{{index+1}}</td>
                                <td><a href="#">{{mess.id}}</a></td>
                                <td><a href="#">{{mess.cate_id}}</a></td>
                                <td><div style='height:40px;overflow: hidden;'>{{mess.title}}</div></td>
                                <td>{{mess.subtitle}}</td>
                                <td class="am-hide-sm-only"><div style='width:300px;height:40px;overflow: hidden;'>{{mess.picnew_content}}</div></td>
                                <td>{{mess.pic_link}}</td>
                                <td>{{mess.price}}</td>
                                <td>{{mess.note}}</td>
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
                                            <a href="#" class="am-btn am-btn-danger am-btn-xs picnew_delete" data-id=""><span class="am-icon-trash"></span>&nbsp;删除</a>
                                            <a href="/Admin/Picnew/update/id/{$val.id}/p/{$p}/cate/" class="am-btn am-btn-primary am-btn-xs"><span class="am-icon-pencil-square-o""></span>&nbsp;修改</a>
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
	var jsondata= {
		"result":[
			{id:12,cate_id:2,title:"Bob",subtitle:"都说开",user:"一级",picnew_content:"说的克己复礼凯撒的解放昆仑山",create_time:"2017-11-23",status:"1"}, 
			{id:22,cate_id:2,title:"July",subtitle:"都说开",user:"一级",picnew_content:"啦圣诞节分厘卡电视机法律",create_time:"2017-11-23",status:"2"},
			 {id:31,cate_id:2,title:"Jack",subtitle:"都说开",user:"一级",picnew_content:"的雷克萨放假了卡多少积分",create_time:"2017-11-23",status:"1"},
			{id:43,cate_id:3,title:"Lily",subtitle:"都说开",user:"一级",picnew_content:"都是浪费记录卡撒旦解放",create_time:"2017-11-23",status:"1"}
		]
	}
	export default {
		name: 'picnew',
		data() {
			return {
				message:jsondata.result,
                ind:""
			}
		},
        methods: {
            changeBgc : function(index) {
                this.ind = index
            }
        }
	}
</script>