import HarmonyClient from "@/components/harmony-client";

const HarmonyPage = async () => {

    return (
        <div className="text-zinc-500 dark:text-zinc-100 flex flex-col h-full md:w-full w-screen">
            <div>
                <HarmonyClient
                    title="New Releases"
                />
            </div>
        </div>
    );
};

export default HarmonyPage;