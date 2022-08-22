import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHeader />
      <div className="p-20 flex flex-col items-center">
        <Component {...pageProps} />
      </div>
    </>
  );
}

const menuItems = [
  { title: "Home", href: "/" },
  { title: "News", href: "/news" },
];

const AppHeader = () => {
  return (
    <header className="h-20 bg-gray-600 w-full">
      {menuItems.map(function mapToMenuItem(menuItem) {
        return (
          <li key={menuItem.title}>
            <Link href={menuItem.href}>
              <a className="hover:text-paul">{menuItem.title}</a>
            </Link>
          </li>
        );
      })}
    </header>
  );
};

export default MyApp;
