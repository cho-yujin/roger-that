import Image from 'next/image'

export default function Footer() {
    const names = [
        "Yoobin Jin", 
        "Yujin Cho",
        "Mileyna Soo",
        "Jahnavi Vishnubhotla",
        "Crystal Gong",
        "Quynh Tran",
        "Kaung Sett Hein"
    ]

    return (
        <div className="w-full flex flex-col px-10 py-10 text-textGray">
            <div className="">
                <Image
                    src="/roger-that-logo.svg"
                    width={100}
                    height={100}
                    alt="User profile picture"
                    className="w-32 rounded-full"
                />
                <p>@ Winter Quarter 2025 | ECS 164</p>
            </div>
            <div className="flex justify-between pt-3">
                <div className="flex flex-col items-start">
                    <p className="font-bold">Designed by</p>
                    <div className="flex">
                        {names.map((name, index) => (
                            <p key={index}>
                                {name}
                                {index !== names.length - 1 && " •"}&nbsp;
                            </p>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <p className="font-bold">Developed in React w/ Next.js</p>
                    <p>Thanks to Prof. Hao-Chuan Wang + our TAs!</p>
                </div>
            </div>
        </div>
    )
}