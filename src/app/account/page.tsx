'use client'

import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card"
import { Crown, Droplet, MapPin, Wallet } from 'lucide-react'

export default function Account() {
  return (
    <main className="pt-16 bg-gray-50 min-h-screen"> {/* Added pt-16 for top padding */}
      <div className="p-6 space-y-6 max-w-7xl mx-auto"> {/* Added max-width and centering */}
        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="flex items-center p-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Crown className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">会员时长</p>
                <h3 className="text-2xl font-bold">64 天</h3>
                <p className="text-xs text-gray-500 mt-1">专业版: 2025-01-23 过期</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <div className="bg-green-100 p-3 rounded-lg">
                <Droplet className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">剩余流量</p>
                <h3 className="text-2xl font-bold">284.52 GB</h3>
                <p className="text-xs text-gray-500 mt-1">今日已用: 270.83MB</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">在线设备数</p>
                <h3 className="text-2xl font-bold">1 / 5</h3>
                <p className="text-xs text-gray-500 mt-1">上次使用时间: 11-20 16:50:35</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Wallet className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">钱包余额</p>
                <h3 className="text-2xl font-bold">¥ 0</h3>
                <p className="text-xs text-gray-500 mt-1">累计获得返利金额: ¥0</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Time Sync and Usage Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                设备时间
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">
                  实际世界时间 (UTC+8) <span className="text-gray-700">16:51:41</span>
                </p>
                <p className="text-sm text-gray-500">
                  您的系统时间 (UTC+8) <span className="text-gray-700">16:51:57</span>
                </p>
              </div>
              <p className="text-sm text-red-500">
                请注意校准上面两个时间，相差 10 秒内才可正常使用节点
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                流量使用情况
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-[200px] w-[200px] mx-auto">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="15"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#4f46e5"
                    strokeWidth="15"
                    strokeDasharray="251.2"
                    strokeDashoffset="50"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm font-medium">已用流量</p>
                    <p className="text-xl font-bold">15.21GB</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>今日已用: 270.83MB</span>
                  <span>可用: 284.52GB</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Announcement Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              公告
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">欢迎使用 iKuuu VPN</h3>
              <p className="text-gray-600">最新官网</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}