import Link from "next/link";

//Component can have any name
//must be exported as a default function though
export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      {
        //link does client side navigation
        //faster than default navigation by browser cause its using JavaScript
      }
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  );
}
