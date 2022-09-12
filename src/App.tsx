import React from "react";
import "./styles.scss";
import Logo from "./assets/Logo.svg";
import QuestionIcon from "./assets/Question_Icon.svg";
import CaretDownIcon from "./assets/Arrow.svg";
import DoneIcon from "./assets/Done.svg";
import SwapIcon from "./assets/Swap.svg";

const colorSchemes = [
    ["#A5AAF5", "#D9DCE1"],
    ["#F4E697", "#D9DCE1"],
    ["#ECB391", "#D9DCE1"],
    ["#D5F698", "#D9DCE1"],
    ["#858DF3", "#DC9698"],
    ["#F4E697", "#9889F3"],
    ["#ECB490", "#8CC681"],
];

function App() {
    return (
        <div className="container">
            <img className="logo" src={Logo} alt="Logo" />

            <div className="heading">
                <span>2. Add content to the PDF QR Code</span>
                <button className="help">
                    <img src={QuestionIcon} alt="Question Icon" />
                    Help
                </button>
            </div>

            <div className="name-container">
                <span>Name your QR code*</span>

                <input placeholder="e.g. My QR code" />
            </div>

            <div className="design-container">
                <div className="design-heading">
                    <div className="first-row">
                        <span className="title">Design & Customize</span>

                        <img src={CaretDownIcon} alt="Expand/Collapse" />
                    </div>
                    <span className="subtitle">Choose your color scheme</span>
                </div>

                <div className="color-scheme-picker">
                    {colorSchemes.map((colorScheme, idx) => (
                        <div
                            className="color-scheme-option"
                            key={colorScheme[0] + colorScheme[1]}
                            style={{
                                ...(idx === 0 && { outline: "2px solid #5D82D5" }),
                            }}
                        >
                            {idx === 0 && <img src={DoneIcon} alt="Done" />}
                            <div
                                className="color-scheme-color"
                                style={{
                                    background: colorScheme[0],
                                }}
                            />
                            <div
                                className="color-scheme-color"
                                style={{
                                    background: colorScheme[1],
                                }}
                            />
                        </div>
                    ))}
                </div>

                <div className="color-values-container">
                    <div className="color-value-block">
                        <span className="color-value-title">Primary Color</span>
                        <div className="color-value">
                            <span>#A5A9FB</span>
                            <div
                                className="color-circle"
                                style={{
                                    background: "#A5A9FB",
                                }}
                            />
                        </div>
                    </div>

                    <img src={SwapIcon} alt="Swap" />

                    <div className="color-value-block">
                        <span className="color-value-title">Secondary Color</span>
                        <div className="color-value">
                            <span>#D9DCE1</span>
                            <div
                                className="color-circle"
                                style={{
                                    background: "#D9DCE1",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
