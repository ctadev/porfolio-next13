import Link from "next/link";

const Footer = () => {
  return (
    <main className="bg-[#181F2A]">
      <h3 className="text-center py-8">
        Cong&apos;s Porfolio &copy; 2023{" "}
        <Link
          href="https://www.linkedin.com/in/cong-ta-8040a018b/"
          target="_blank"
        >
          <span className="underline cursor-pointer hover:text-[cyan]">
            Ctadev
          </span>
        </Link>
        . All rights reserved.
      </h3>
    </main>
  );
};

export default Footer;
