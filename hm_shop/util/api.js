const BASE_URL = 'http://localhost:8082'
export const myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res)=>{
				if(res.data.status !== 0) {
					return uni.showToast({
						title: '获取数据失败2'
					})
				}
				resolve(res)
			},
			fail: (err)=>{
				uni.showToast({
					title: '请求接口失败'
				})
				reject(err)
			}
		})
	})
}

export const myRequestUrl = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:options.url,
			method: 'GET',
			responseType: 'arraybuffer',
			success: (res)=>{
				if(res.data.status !== 0) {
					return uni.showToast({
						title: '获取数据失败2'
					})
				}
				resolve(res)
			},
			fail: (err)=>{
				uni.showToast({
					title: '请求接口失败'
				})
				reject(err)
			}
		})
	})
}