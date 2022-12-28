import Link from 'next/link'

const AboutPage = () => {
  return <>
    <h1>About</h1>

    <Link href="/" legacyBehavior>
      <div>Back home</div>
    </Link>
  </>;
}

export default AboutPage