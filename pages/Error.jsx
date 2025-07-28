import { useNavigate } from "react-router-dom"

export const ErrorPage = () => {
    const navigation = useNavigate();
    const handleGoBack = () => {
        navigation(-1);
    }
    return (
        <>
            <h1>404 Error Page</h1>

            <button className="bg-slate-500 p-2 m-2" onClick={handleGoBack}>Go back</button>
        </>
    )
}