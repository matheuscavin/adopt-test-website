import type { NextPage } from "next";
import Head from "next/head";
import { useLocalStorage } from "../hooks/useLocalstorage";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "assets/logo.svg";
import login from "assets/login.svg";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

interface QueryParams extends ParsedUrlQuery {
  code: string;
}

const Home: NextPage = () => {
  const router = useRouter();
  const { code } = router.query as QueryParams;
  const [, setDebug] = useLocalStorage("debug", "true");
  const [tagId, setTagId] = useLocalStorage("prodAdoptTag", code);
  const [id, setId] = useState(code);

  useEffect(() => {
    setDebug("true");
  }, []);

  useEffect(() => {
    if (code !== undefined) {
      setTagId(code);
    }
  }, [code]);

  return (
    <>
      <Head>
        <meta name="adopt-website-id" content={tagId} />
        <script
          src={`//tag.goadopt.io/injector.js?website_code=${tagId}`}
          className="adopt-injector"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KGTK9DT');`,
          }}
        ></script>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WD6N9J65C8"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-WD6N9J65C8');
    `,
          }}
        ></script>
      </Head>

      <div className="min-h-screen flex items-center ">
        <div className="hidden md:flex bg-gray w-2/5 dark:bg-gray h-screen  justify-center items-center">
          <div className="max-w-4xl">
            <Image src={login} alt="Picture of the author" />
          </div>
        </div>
        <div className="h-screen w-full md:w-3/5 dark:bg-black flex justify-center items-center">
          <div>
            <div className=" w-96 shadow-md border border-gray-200 border-opacity-25 rounded-md dark:bg-gray dark:border-none dark:border-opacity-0">
              <div className="py-6 px-8">
                <div className="w-16 h-16 mx-auto">
                  <Image src={logo} alt="Logo Adopt" />
                </div>
                {code === undefined ? (
                  <div>
                    <div className="mt-6 mb-1 dark:text-white">
                      Insira o aviso que você gostaria de instalar
                    </div>

                    <input
                      type="text"
                      className="dark:bg-gray dark:text-white appearance-none relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                      value={id}
                      onChange={(e) => {
                        setId(e.target.value);
                      }}
                    />
                    <button
                      className="py-2 bg-primary rounded-md hover:bg-primary-600 w-full mt-10"
                      onClick={() => setTagId(id)}
                    >
                      Salvar
                    </button>
                  </div>
                ) : (
                  <div className="mt-6 mb-1  text-center">
                    Ambiente para testes da AdOpt
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
