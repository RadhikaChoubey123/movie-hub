import { Outlet } from "react-router-dom"
import { useNavigation } from "react-router-dom"
import { Header } from "./header"
import { Footer } from "./footer"
import { Loading } from "./loding"
export const AppLayout = () => {
    const navigation = useNavigation();
    if (navigation.state === "loading")
        return <Loading />
    else

        return (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        );
}