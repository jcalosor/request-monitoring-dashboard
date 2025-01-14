import Image from 'next/image'

export default function Logo() {
    return (
        <div className="grid-element">
            <Image
                fill={false}
                alt="Logo"
                src="https://i.ibb.co/WsTkRsC/beat-logo.png"
                sizes="(max-width: 250px) 100vw, (max-width: 250px) 50vw, 33vw"
                width={100}
                height={100}
            />
        </div>
    )
}