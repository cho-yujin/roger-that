import Image from 'next/image'
import Link from 'next/link'

export default function InboxButton() {
    return(
        <Link href="/user/inbox" className="block px-6">
            <Image
                src="/inbox.svg"
                width={30}
                height={30}
                alt="Inbox icon"
                className="w-6 h-6"
            />
        </Link>
    )
}