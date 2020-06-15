import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/auth/qq',
    method: 'get',
    data
  })
}
