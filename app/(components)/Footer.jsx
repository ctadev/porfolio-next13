import Link from "next/link";
import { Svg } from ".";

const Footer = () => {
  return (
    <main className="flex items-center justify-center">
      <div className="max-w-[1440px] w-full px-6 flex items-center justify-between pt-[20px] pb-[40px]">
        <section>
          <p>
            © 2023{" "}
            <Link
              href="https://www.linkedin.com/in/cong-ta-8040a018b/"
              target="_blank"
            >
              <span className="underline cursor-pointer hover:text-[cyan]">
                Ctadev
              </span>
            </Link>
            . All rights reserved.
          </p>
        </section>

        <section className="flex gap-4">
          <Link
            href="https://www.linkedin.com/in/cong-ta-8040a018b/"
            target="_blank"
          >
            <Svg iconName="linkin" color="#778295" className="social_icons" />
          </Link>
          <Link href="https://github.com/ctadev" target="_blank">
             <Svg iconName="github" color="#778295" className="social_icons h-[24px] w-[24px]" />
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Footer;
