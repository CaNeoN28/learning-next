import Image from "next/image";
import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <Image
        src="/images/profile.png"
        width={100}
        height={100}
      />
      <h1>
        Primeiro Post
      </h1>
      <h2>
        <Link href="/">Retornar ao inicio</Link>
      </h2>
    </>
  )
}