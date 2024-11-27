import { useState, useRef } from 'react'
import { UserIcon } from 'lucide-react'

interface AvatarProps {
    initialSrc?: string | null
    onAvatarChange?: (src: string) => void
}

export function Avatar({ initialSrc, onAvatarChange }: AvatarProps) {
    const [avatarSrc, setAvatarSrc] = useState<string | null>(initialSrc || null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
            const reader = new FileReader()
            reader.onload = (e) => {
                const newSrc = e.target?.result as string
                setAvatarSrc(newSrc)
                onAvatarChange?.(newSrc)
            }
            reader.readAsDataURL(file)
        } else {
            alert('请上传 PNG 或 JPG 格式的图片')
        }
    }

    const handleAvatarClick = () => {
        fileInputRef.current?.click()
    }

    return (
        <div className="relative">
            <button
                onClick={handleAvatarClick}
                className="w-[50px] h-[50px] bg-gray-200 rounded-full flex items-center justify-center focus:outline-none overflow-hidden"
            >
                {avatarSrc ? (
                    <img src={avatarSrc} alt="用户头像" className="w-full h-full object-cover" />
                ) : (
                    <UserIcon className="w-6 h-6 text-gray-600" />
                )}
            </button>
            <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept="image/png, image/jpeg"
                onChange={handleFileUpload}
                aria-label="上传头像"
            />
        </div>
    )
}

