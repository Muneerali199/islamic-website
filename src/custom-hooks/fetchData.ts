import { useEffect, useState } from "react";

type Dependencies = any[];

type Status = "LOADING" | "ERROR" | "SUCCESS";

const useFetch = <T>({ url }: { url: string }, dependencies: Dependencies) => {
    const [data, setData] = useState<T | null>(null);
    const [status, setStatus] = useState<Status>("LOADING");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!url) {
            setStatus("ERROR");
            return;
        }
        setStatus("LOADING");
        async function getData() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
                const data = await response.json();
                setData(data);
                setStatus("SUCCESS");
            } catch (error: any) {
                setStatus("ERROR");
                setError(error.message);
            }
        }
        getData();
    }, dependencies);

    return { data, status, error };
}

const isLoading = (status: Status) => status === "LOADING";
const isSuccess = (status: Status) => status === "SUCCESS";
const isError = (status: Status) => status === "ERROR";

export { useFetch, isLoading, isSuccess, isError };