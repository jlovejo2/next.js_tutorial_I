import Link from "next/link";

//Component can have any name
//must be exported as a default function though
export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  );
}
