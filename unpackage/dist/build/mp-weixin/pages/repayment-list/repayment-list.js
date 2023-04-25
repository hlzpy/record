"use strict";const e=require("./tableData.js"),t=require("../../common/vendor.js"),a={data:()=>({searchVal:"",tableData:[],pageSize:10,pageCurrent:1,total:0,loading:!1}),onLoad(){this.selectedIndexs=[],this.getData(1)},methods:{change(e){this.$refs.table.clearSelection(),this.selectedIndexs.length=0,this.getData(e.current)},search(){this.getData(1,this.searchVal)},getData(e,t=""){this.loading=!0,this.pageCurrent=e,this.request({pageSize:this.pageSize,pageCurrent:e,value:t,success:e=>{this.tableData=e.data,this.total=e.total,this.loading=!1}})},request(t){const{pageSize:a,pageCurrent:n,success:i,value:o}=t;let s=e.tableData.length,r=e.tableData.filter(((e,t)=>{const i=t-(n-1)*a;return i<a&&i>=0}));o&&(r=[],e.tableData.forEach((e=>{-1!==e.name.indexOf(o)&&r.push(e)})),s=r.length),setTimeout((()=>{"function"==typeof i&&i({data:r,total:s})}),500)}}};if(!Array){(t.resolveComponent("uni-th")+t.resolveComponent("uni-tr")+t.resolveComponent("uni-td")+t.resolveComponent("uni-table")+t.resolveComponent("uni-pagination"))()}Math||((()=>"../../uni_modules/uni-table/components/uni-th/uni-th.js")+(()=>"../../uni_modules/uni-table/components/uni-tr/uni-tr.js")+(()=>"../../uni_modules/uni-table/components/uni-td/uni-td.js")+(()=>"../../uni_modules/uni-table/components/uni-table/uni-table.js")+(()=>"../../uni_modules/uni-pagination/components/uni-pagination/uni-pagination.js"))();const n=t._export_sfc(a,[["render",function(e,a,n,i,o,s){return{a:t.p({width:"80",align:"center"}),b:t.p({width:"120",align:"center"}),c:t.p({width:"160",align:"center"}),d:t.f(o.tableData,((e,a,n)=>({a:t.t(e.name),b:"3fa3e2bf-6-"+n+",3fa3e2bf-5-"+n,c:t.t(e.date),d:"3fa3e2bf-7-"+n+",3fa3e2bf-5-"+n,e:"3fa3e2bf-8-"+n+",3fa3e2bf-5-"+n,f:a,g:"3fa3e2bf-5-"+n+",3fa3e2bf-0"}))),e:t.sr("table","3fa3e2bf-0"),f:t.p({loading:o.loading,border:!0,stripe:!0,emptyText:"暂无更多数据"}),g:t.o(s.change),h:t.p({"show-icon":!0,"page-size":o.pageSize,current:o.pageCurrent,total:o.total})}}]]);wx.createPage(n);
