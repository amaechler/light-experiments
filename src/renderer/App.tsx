import type * as React from "react";
import TopBar from "./components/TopBar";

const containerMotion = {
    initial: "hidden",
    animate: "visible",
    variants: {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }
};

function App() {
    return (
        <div className="h-screen w-screen flex flex-col pt-12">
            <TopBar />
            <div className="flex flex-col items-center justify-center h-full pb-0">Hello World</div>
        </div>
    );
}

export default App;
