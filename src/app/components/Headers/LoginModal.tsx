'use client'

import { useState } from 'react'
import { Modal, Input, Button, Form } from 'antd'
import React from 'react'

interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
}

// 使用 forwardRef 包裹组件
export const LoginModal = React.forwardRef<HTMLDivElement, LoginModalProps>(({ isOpen, onClose }: LoginModalProps) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // 使用 useEffect 来避免在渲染过程中更新状态
    const handleSubmit = (values: { username: string, password: string }) => {
        // 处理登录逻辑
        console.log('Login submitted', values)

        // 重置状态，并在状态更新后关闭弹窗
        setUsername('')
        setPassword('')
        onClose()
    }

    return (
        <Modal
            title="登录"
            open={isOpen}
            onCancel={onClose}
            footer={null} // 不显示默认的 footer 按钮
            width={425}
        // ref={ref} // 将 ref 传递给 Modal 组件
        >
            <Form
                name="login-form"
                onFinish={handleSubmit}
                initialValues={{ username, password }}
                layout="vertical"
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: '请输入用户名' }]}
                >
                    <Input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="请输入用户名"
                    />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input.Password
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="请输入密码"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
})

// 需要通过 forwardRef 包裹的组件要导出
LoginModal.displayName = 'LoginModal' // 设置 displayName 以便调试时查看组件名

