// utils/AxiosResponseIntrceptorErrorCallback.js
const AxiosResponseIntrceptorErrorCallback = (error) => {
    if (error.response) {
        // Server responded with error status
        const { status, data } = error.response
        
        switch (status) {
            case 401:
                console.error('Unauthorized access')
                // Redirect to login jika perlu
                break
            case 403:
                console.error('Forbidden access')
                break
            case 404:
                console.error('Resource not found')
                break
            case 500:
                console.error('Server error')
                break
            default:
                console.error('API Error:', data?.message || 'Something went wrong')
        }
    } else if (error.request) {
        // Request was made but no response
        console.error('No response from server')
    } else {
        // Something else happened
        console.error('Error:', error.message)
    }
    
    return Promise.reject(error)
}

export default AxiosResponseIntrceptorErrorCallback