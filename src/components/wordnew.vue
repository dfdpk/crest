<template>
	<div class="admin-content-body">
        <div class="am-cf am-padding am-padding-bottom-0">
            <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">文字内容</strong> / <small>new</small></div>
        </div>
        <div class="am-cf am-padding am-padding-bottom-0">
            <a href="/Admin/New/add" title="" class="am-btn am-btn-primary am-btn-xs">添加</a>
        </div>
        <div class="am-cf am-padding am-padding-bottom-0">
            <a class='am-btn am-btn-success am-btn-xs mr10' href="#" v-for="(mess,index) in message" :class="{'am-active':ind===index}" @click="changeBgc(index)">{{mess.title}}</a>&nbsp;
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
                            <th class="table-title">id</th>
                            <th class="table-title">分类id</th>
                            <th class="table-set">标题</th>
                            <th class="table-title">作者</th>
                            <th class="table-title am-hide-sm-only">新闻内容</th>
                            <th class="table-date">创建时间</th>
                            <th class="table-set">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                    	<tr v-if="message.length==0">  
                            <td colspan="3" class="am-text-center"><a href="#">暂无数据</a></td>  
                        </tr> 
                        <tr v-else v-for="(mess,index) in message" :key="index">
                            <td>{{index+1}}</td>
                            <td><a href="#">{{mess.id}}</a></td>
                            <td><a href="#">{{mess.cate_id}}</a></td>
                            <td><div style='height:40px;overflow: hidden;'>{{mess.title}}</div></td>
                            <td>{{mess.user}}</td>
                            <td class="am-hide-sm-only"><div style='width:500px;height:40px;overflow: hidden;'>{{mess.new_content}}</div>
                            </td>
                            <td>{{mess.create_time}}</td>
                            <td>
                                <div class="am-btn-toolbar">
                                    <div class="am-btn-group am-btn-group-xs">
                                        <a href="#" class="am-btn am-btn-danger am-btn-xs am-hide-sm-only new_delete" data-id="{$val.id}"><span class="am-icon-trash"></span>&nbsp;删除</a>
                                        <a href="/Admin/New/update/id/{$val.id}/p/{$p}/cate/{$cate}" class="am-btn am-btn-primary am-btn-xs am-hide-sm-only"><span class="am-icon-pencil-square-o"></span>&nbsp;修改</a>
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
            </div>
        </div>
    </div>
</template>
<script>
	var jsondata= {
		"result":[
			{id:12,cate_id:2,title:"Bob",user:"一级",new_content:"说的克己复礼凯撒的解放昆仑山",cate_id:2,create_time:"2017-11-23"}, 
			{id:22,cate_id:2,title:"July",user:"一级",new_content:"啦圣诞节分厘卡电视机法律",create_time:"2017-11-23"}, {id:31,cate_id:2,title:"Jack",user:"一级",new_content:"的雷克萨放假了卡多少积分",create_time:"2017-11-23"},
			{id:43,cate_id:3,title:"Lily",user:"一级",new_content:"都是浪费记录卡撒旦解放",create_time:"2017-11-23"}
		]
	}
	export default {
		name: 'wordnew',
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