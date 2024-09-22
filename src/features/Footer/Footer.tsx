import { Link } from "@/components/Link";
import { FOOTER_LINKS } from "@/config/links";

const Footer = () => {
  return (
    <footer className="bg-background/30 relative mx-auto mb-6 flex max-w-5xl flex-col rounded-2xl p-8 shadow-sm saturate-100 backdrop-blur-[10px]">
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3">
        {FOOTER_LINKS.map((list) => (
          <div
            key={list.id}
            className="mb-10 flex flex-col items-start gap-4 pr-4"
          >
            {list.links.map((link) => {
              const { href, text } = link;

              return (
                <Link key={href} href={href} variant="muted">
                  {text}
                </Link>
              );
            })}
          </div>
        ))}
      </div>
      <div className="mt-20 text-sm">
        <div>&copy; {new Date().getFullYear()} Tsotne</div>
      </div>
    </footer>
  );
};

export default Footer;
