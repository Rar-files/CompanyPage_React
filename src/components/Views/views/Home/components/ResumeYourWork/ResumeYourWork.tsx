import { FC, useState } from "react";
import styled from "styled-components";

import Posts from './ResumeYourWorkPosts';

const ResumeYourWork : FC = () => {
    const [filtred, setFiltred] = useState("");

    return (
        <>
            <Posts filterValue={filtred} posts={{from: 0,to: 5}}/>
        </>
    );
}

export default ResumeYourWork;