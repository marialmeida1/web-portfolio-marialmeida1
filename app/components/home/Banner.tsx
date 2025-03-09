import Image from 'next/image'


export default function Banner() {
    return (
        <Image
            src="/img/banner/bg_web.png"
            alt="Banner image"
            width={1920}
            height={505}
            objectFit="cover"
            quality={90}
            priority
            className="w-full"
        />
    );
}