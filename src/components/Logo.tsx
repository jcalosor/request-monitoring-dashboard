import Image from 'next/image'

export default function Logo() {
    const imageStyle = {
        position: 'relative !important',
        margin: '0 auto',
    }

    return (
        <div className="grid-element">
            <Image
                fill={false}
                alt="Logo"
                src="https://i.ibb.co/WsTkRsC/beat-logo.png"
                sizes="(max-width: 250px) 100vw, (max-width: 250px) 50vw, 33vw"
                width={100}
                height={100}
                style={imageStyle}
            />
        </div>
    )
}