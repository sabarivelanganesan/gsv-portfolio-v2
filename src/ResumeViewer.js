import React from "react";
import resumeinpdf from './styles/SVGanesan-Resume.pdf';

function ResumeViewer() {
    return (
        <iframe title="Sabarivelan-Ganesan-Resume" id="resumeViewer" src={resumeinpdf}></iframe>
    )
}

export default ResumeViewer;    