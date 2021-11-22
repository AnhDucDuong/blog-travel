import React from "react";
import AboutComponent from "./AboutComponent";
import AreaComponent from "./AreaComponent";
import PostsComponent from "./PostsComponent";

function Container() {
    return (
        <div>
            {/*About Us Component Home Page*/}
            <AboutComponent />

            {/*Post Component Home Page*/}
            <PostsComponent />

            {/*Area Home Page*/}
            <AreaComponent />
        </div>
    );
}

export default Container