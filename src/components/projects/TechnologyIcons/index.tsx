import {Icon} from "@iconify/react";
import React from "react";

type TechnologyIconProps = {
    reactIcon?: boolean,
    puppeteerIcon?: boolean,
    javaScriptIcon?: boolean,
    nodeIcon?: boolean,
    firebaseIcon?: boolean,
    expressIcon?: boolean,
    nextIcon?: boolean,
    typeScriptIcon?: boolean,
    apiIcon?: boolean,
    muiIcon?: boolean,
    cssIcon?: boolean,
}

export default function TechnologyIcons({ reactIcon, puppeteerIcon, javaScriptIcon, nodeIcon, firebaseIcon, expressIcon, nextIcon, typeScriptIcon, apiIcon, muiIcon, cssIcon }:TechnologyIconProps ): JSX.Element {

    function ReactIcon(): JSX.Element {
        return <Icon icon="akar-icons:react-fill" />
    }

    function PuppeteerIcon(): JSX.Element {
        return <Icon icon="logos:puppeteer" />
    }

    function JavaScriptIcon(): JSX.Element {
        return <Icon icon="akar-icons:javascript-fill" />
    }

    function NodeIcon(): JSX.Element {
        return <Icon icon="akar-icons:node-fill" />
    }

    function FirebaseIcon(): JSX.Element {
        return <Icon icon="bxl:firebase" />
    }

    function ExpressIcon(): JSX.Element {
        return <Icon icon="simple-icons:express" />
    }

    function NextIcon(): JSX.Element {
        return <Icon icon="cib:next-js" />
    }

    function TypeScriptIcon(): JSX.Element {
        return <Icon icon="cib:typescript" />
    }

    function ApiIcon(): JSX.Element {
        return <Icon icon="ant-design:api-filled" />
    }

    function MuiIcon(): JSX.Element {
        return <Icon icon="simple-icons:mui" />
    }

    function CssIcon(): JSX.Element {
        return <Icon icon="akar-icons:css-fill" />
    }

    return (
        <>
            { reactIcon && <ReactIcon /> }
            { puppeteerIcon && <PuppeteerIcon /> }
            { javaScriptIcon && <JavaScriptIcon /> }
            { nodeIcon && <NodeIcon /> }
            { firebaseIcon && <FirebaseIcon /> }
            { expressIcon && <ExpressIcon /> }
            { nextIcon && <NextIcon /> }
            { typeScriptIcon && <TypeScriptIcon /> }
            { apiIcon && <ApiIcon /> }
            { muiIcon && <MuiIcon /> }
            { cssIcon && <CssIcon /> }
        </>
    )
}