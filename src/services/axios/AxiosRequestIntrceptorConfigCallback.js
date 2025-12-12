// utils/AxiosRequestIntrceptorConfigCallback.js
const AxiosRequestIntrceptorConfigCallback = (config) => {
    // Tambahkan token jika ada (opsional untuk WordPress public API)
    // const token = localStorage.getItem('token')
    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`
    // }
    
    // Set default headers
    config.headers['Content-Type'] = 'application/json'
    config.headers['Accept'] = 'application/json'
    
    return config
}

export default AxiosRequestIntrceptorConfigCallback