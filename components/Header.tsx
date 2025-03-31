"use client";
import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: #005bb5;
    padding: 0.5%;
    border: 2px solid #000000;
`;

const StyledH1 = styled.h1`
    margin-left: 10px;
    color: white;
`;

export default function Header() {
    return (
        <StyledHeader>
            <StyledH1>CS391 MP-4 Stock Data</StyledH1>
        </StyledHeader>
    );
}