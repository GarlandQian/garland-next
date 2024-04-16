'use client'

import React from 'react'

import { Button } from 'antd'
import styled from 'styled-components'

import useUserStore from '@/store/user'

const Info = () => {
  const { userInfo, token, updateUserInfo, updateAge, updateToken } = useUserStore()

  return (
    <div className="App">
      <Li>
        姓名：{userInfo.name} 年龄：{userInfo.age}
      </Li>
      <div className="flex">token：{token}</div>
      <Button type="primary" onClick={() => updateUserInfo({ name: 'lisi', age: 24 })}>
        更新用户
      </Button>
      <Button type="primary" onClick={() => updateAge(userInfo.age + 1)}>
        更新年龄
      </Button>
      <Button type="primary" onClick={() => updateToken('23652')}>
        更新token
      </Button>
    </div>
  )
}

const Li = styled.div`
  color: red;
`

export default Info
