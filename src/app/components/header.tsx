import Image from 'next/image'
import UserHeader from "./userHeader"
import Link from 'next/link'

export default function Header() {
    return (
        <div className="w-full flex justify-between items-center px-3 py-4">
            <Link href="/user" className="block px-6">
                <Image
                    src="/roger-that-logo.svg"
                    width={100}
                    height={100}
                    alt="User profile picture"
                    className="w-32 rounded-full"
                />
            </Link>
            <UserHeader name="Yoobin Jin" email="yoobin@gmail.com" />
        </div>
    )
}