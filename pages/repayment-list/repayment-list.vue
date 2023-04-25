<template>
	<view>
		<view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe  emptyText="暂无更多数据">
				<uni-tr>
					<uni-th align="center">被借人</uni-th>
					<uni-th align="center">被借金额(单位w)</uni-th>
					<uni-th align="center">还款日期</uni-th>
					<uni-th align="center">还款金额(单位w)</uni-th>
					<uni-th align="center">剩余金额(单位w)</uni-th>
					<uni-th align="left">备注</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td>
						<view class="borrowerName">{{ item.borrowerName }}</view>
					</uni-td>
					<uni-td>{{ item.borrowedAmount }}</uni-td>
					<uni-td>{{ item.repaymentDate }}</uni-td>
					<uni-td>{{ item.repaymentAmount }}</uni-td>
					<uni-td>{{ item.residualAmount }}</uni-td>
					<uni-td>{{ item.remark }}</uni-td>
					<uni-td>
						<view class="uni-group">
							<button class="uni-button" size="mini" type="primary">修改</button>
							<button class="uni-button" size="mini" type="warn">删除</button>
						</view>
					</uni-td>
				</uni-tr>
			</uni-table>
			<view class="uni-pagination-box"><uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total" @change="change" /></view>
		</view>
	</view>
</template>

<script>
import tableData from './tableData.js'
export default {
	data() {
		return {
			searchVal: '',
			tableData: [],
			// 每页数据量
			pageSize: 10,
			// 当前页
			pageCurrent: 1,
			// 数据总量
			total: 0,
			loading: false
		}
	},
	onLoad() {
		this.selectedIndexs = []
		this.getData(1)
	},
	methods: {

		// 分页触发
		change(e) {
			this.$refs.table.clearSelection()
			this.selectedIndexs.length = 0
			this.getData(e.current)
		},
		// 搜索
		search() {
			this.getData(1, this.searchVal)
		},
		// 获取数据
		getData(pageCurrent, value = '') {
			this.loading = true
			this.pageCurrent = pageCurrent
			this.request({
				pageSize: this.pageSize,
				pageCurrent: pageCurrent,
				value: value,
				success: res => {
					// console.log('data', res);
					this.tableData = res.data
					this.total = res.total
					this.loading = false
				}
			})
		},
		// 伪request请求
		request(options) {
			const { pageSize, pageCurrent, success, value } = options
			let total = tableData.length
			let data = tableData.filter((item, index) => {
				const idx = index - (pageCurrent - 1) * pageSize
				return idx < pageSize && idx >= 0
			})
			if (value) {
				data = []
				tableData.forEach(item => {
					if (item.borrowerName.indexOf(value) !== -1) {
						data.push(item)
					}
				})
				total = data.length
			}

			setTimeout(() => {
				typeof success === 'function' &&
					success({
						data: data,
						total: total
					})
			}, 500)
		}
	}
}
</script>

<style>
.uni-group {
	display: flex;
	align-items: center;
}
</style>
