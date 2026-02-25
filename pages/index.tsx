import Head from "next/head";
import Script from "next/script";
import GitHubCorner from "react-github-corner";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faFileAlt} from "@fortawesome/free-solid-svg-icons";
import {PropsWithChildren} from "react";

import {Template} from "../components/Template";

type SectionProps = PropsWithChildren<{
    heading: string;
}>;

function Section(props: SectionProps) {
    return (
        <section className="flex justify-center pt-10 pb-6">
            <div className="max-w-prose">
                <h2>{props.heading}</h2>
                {props.children}
            </div>
        </section>
    );
}

type SectionItemProps = PropsWithChildren<{
    heading: string;
    isFAQ?: boolean;
}>;

function SectionItem(props: SectionItemProps) {
    return (
        <div className="mb-8 mx-4">
            <h3
                className={
                    props.isFAQ
                        ? "bg-yellow-300 px-6 py-3 mb-0 rounded-t-md text-lg"
                        : null
                }
            >
                {props.heading}
            </h3>
            {props.isFAQ ? (
                <div className="bg-yellow-50 px-6 pt-2 pb-4 rounded-b-md">
                    {props.children}
                </div>
            ) : (
                props.children
            )}
        </div>
    );
}

export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <title>Make a README</title>

                {/* Search Engine */}
                <meta
                    name="description"
                    content="Learn how to make a great README for your programming project, and use the editable template to get started."
                />
                {/* Schema.org for Google */}
                <meta itemProp="name" content="Make a README" />
                <meta
                    itemProp="description"
                    content="Learn how to make a great README for your programming project, and use the editable template to get started."
                />
                {/* Twitter */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Make a README" />
                <meta
                    name="twitter:description"
                    content="Learn how to make a great README for your programming project, and use the editable template to get started."
                />
                <meta name="twitter:creator" content="@dannyguo" />
                {/* Open Graph general (Facebook, Pinterest & Google+) */}
                <meta property="og:title" content="Make a README" />
                <meta
                    property="og:description"
                    content="Learn how to make a great README for your programming project, and use the editable template to get started."
                />
                <meta property="og:url" content="https://www.makeareadme.com" />
                <meta property="og:site_name" content="Make a README" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://www.makeareadme.com/images/open-graph-logo.png?v=20181203"
                />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                <link
                    rel="icon"
                    type="image/x-icon"
                    href="images/favicon.ico"
                />
            </Head>

            <GitHubCorner
                href="https://github.com/dguo/make-a-readme"
                bannerColor="#fff"
                octoColor="#404040"
            />


            <aside id="ethicalads-section" className="flex justify-center">
                <div
                    className="horizontal"
                    data-ea-publisher="makeareadmecom"
                    data-ea-type="image"
                ></div>
            </aside>


            <Template />


            <Script
                strategy="beforeInteractive"
                src="https://cdnjs.cloudflare.com/ajax/libs/anchor-js/4.1.1/anchor.min.js"
            />
            <Script>
                {`
                    window.anchors.options.placement = "left";
                    // One of the longer FAQ questions doesn't work with the default
                    // truncate value. The anchor link looks fine, but Chrome doesn't
                    // jump to it when loading in a new tab.
                    window.anchors.options.truncate = 50;
                    window.anchors.add();

                    window.dataLayer = window.dataLayer || [];
                    function gtag() {
                        dataLayer.push(arguments);
                    }
                    gtag("js", new Date());
                    gtag("config", "G-2BK72SW7BH");
                `}
            </Script>
            <Script
                src="https://media.ethicalads.io/media/client/ethicalads.min.js"
                onLoad={() => {
                    document
                        .getElementById("ethicalads-section")
                        .classList.add("border-b-2", "pt-2");
                }}
            />
            <Script
                src="/lava-cake/js/script.js"
                data-api="/lava-cake/api/event"
                data-domain="makeareadme.com"
            />
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-2BK72SW7BH" />
        </>
    );
}
