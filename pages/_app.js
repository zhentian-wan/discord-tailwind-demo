import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../styles.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { Discord } from "../components/icon";
export let servers = [
  { id: "1", img: "tailwind.png", name: "Tailwind CSS" },
  { id: "2", img: "next.png", name: "Next.js" },
  { id: "3", img: "mirage.png", name: "Mirage" },
];
export const getServerById = (id) => servers.find((s) => s.id === id);

// 1. group + group-hover
// 2. group-active:translate-y-px: tranlsate y 1 px when group is active
// 3. broader-t-white/[0.06]: border-top, white, 6% opacity
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Discord Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen text-gray-100">
        <div className="p-3 space-y-2 overflow-y-auto bg-gray-900">
          <NavLink href="/">
            <Discord className="h-5 w-7" />
          </NavLink>
          <hr className="border-t-white/[0.06] border-t-2 rounded mx-2" />
          {servers.map((server) => {
            return (
              <NavLink
                key={server.id}
                href={`/servers/${server.id}`}
                title={server.name}
              >
                <img src={`/servers/${server.img}`} alt="" />
              </NavLink>
            );
          })}
        </div>

        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;

export function NavLink({ href, children }) {
  let router = useRouter();

  return (
    <Link href={href}>
      <a className="relative block group">
        <div className="absolute flex items-center h-full -left-3">
          <div
            className={`${
              router.asPath === href
                ? "h-10"
                : "h-5 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100"
            } w-1 transition-all duration-200 origin-left bg-white rounded-r`}
          ></div>
        </div>

        <div className="group-active:translate-y-px">
          <div
            className={`${
              router.asPath === href
                ? "rounded-2xl bg-brand text-white"
                : "text-gray-100 group-hover:rounded-2xl group-hover:bg-brand group-hover:text-white bg-gray-700 rounded-3xl"
            } flex items-center justify-center w-12 h-12 transition-all duration-200 overflow-hidden`}
          >
            {children}
          </div>
        </div>
      </a>
    </Link>
  );
}
