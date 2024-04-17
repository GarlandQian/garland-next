'use client'

import React from 'react'

import { Button } from 'antd'
import { createStyles } from 'antd-style'

import useUserStore from '@/store/user'

const useStyles = createStyles(({ token, css }) => ({
  button: css`
    width: 400px;
    color: ${token.cyan8};
    background-color: #fedeae;
  `,
}))

const Info = () => {
  const { userInfo, token, updateUserInfo, updateAge, updateToken } = useUserStore()
  const { styles } = useStyles()

  return (
    <div className="App">
      <div>
        姓名：{userInfo.name} 年龄：{userInfo.age}
      </div>
      <div className="flex">token：{token}</div>
      <Button className={styles.button} type="primary" onClick={() => updateUserInfo({ name: 'lisi', age: 24 })}>
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

export default Info
