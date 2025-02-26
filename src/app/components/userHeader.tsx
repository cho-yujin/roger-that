import Image from 'next/image'
import InboxButton from './inboxButton'

interface UserHeaderProps {
    name: string;
    email: string;
}

export default function UserHeader({name, email}: UserHeaderProps) {
    return (
        <div className="h-12 flex justify-center items-center px-6">
            <InboxButton />
            <div className="h-[80%] border-l border-textGray opacity-50"/>
            <div className="flex justify-center items-center pl-6">
                <Image
                    src="/cat.png"
                    width={100}
                    height={100}
                    alt="User profile picture"
                    className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col pl-4 leading-none gap-1.5">
                    <h1 className="font-semibold text-[15px]">{name}</h1>
                    <h2 className="text-textGray text-[13px]">{email}</h2>
                </div>
            </div>
        </div>
    )
}