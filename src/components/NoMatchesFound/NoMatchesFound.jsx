import React from 'react';
import './NoMatchesFound.scss';
import BlankPage from "../BlankPage/BlankPage";

const NoMatchesFound = () => (
    <BlankPage>
        <span className="text-muted">К сожалению, читать нечего :(</span>
    </BlankPage>
);

export default NoMatchesFound;