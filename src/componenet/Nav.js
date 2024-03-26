import { Link } from "react-router-dom";
function Nav() {
    return (
        <nav>
            <Link to="/">홈</Link>
            <br />
            <Link to="/todos">할일</Link>
        </nav>
    );
}

export default Nav;