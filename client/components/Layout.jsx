import OuterNav from "./OuterNav";
import InnerNav from "./InnerNav";

export default function Layout({ children}) {
    return ( 
        <div>
            <OuterNav />
            <InnerNav />
            { children }
        </div>
     );
}

