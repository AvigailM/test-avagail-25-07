import React from "react";
import { Link } from "react-router-dom";
type HeaderProps = {
    
};

const Header = ({  }: HeaderProps) => {

    return (
        <>
        this is the header
        <Link to="/">About</Link>
        <Link to="/blog">Blog</Link>
        </>
    );
};

export default Header;
