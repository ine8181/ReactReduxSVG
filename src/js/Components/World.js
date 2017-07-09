"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("React");
const ScreenContainer_1 = require("./ScreenContainer");
const PlayerContainer_1 = require("./PlayerContainer");
const Defs_1 = require("./SVG/Defs");
class World extends React.Component {
    constructor(props) {
        super();
        this.state = {
            width: 0,
            height: 0,
            left: 0
        };
    }
    componentDidMount() {
        this.resize();
        window.addEventListener('resize', this.resize.bind(this));
        window.addEventListener('orientationchange', this.resize.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
        window.removeEventListener('orientationchange', this.resize);
    }
    resize() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const windowRatio = windowWidth / windowHeight;
        const svgRatio = 4 / 3;
        let width;
        let height;
        if (windowRatio > svgRatio) {
            // Screen is wider than the SVG
            width = Math.floor(windowHeight * svgRatio);
            height = windowHeight;
        }
        else {
            // Screen is narrower
            width = windowWidth;
            height = Math.floor(windowWidth / svgRatio);
        }
        this.setState({ width: width });
        this.setState({ height: height });
        this.setState({ left: Math.floor((windowWidth - width) / 2) });
    }
    render() {
        const style = {
            width: this.state.width + 'px',
            height: this.state.height + 'px',
            left: this.state.left + 'px'
        };
        return (React.createElement("svg", { id: "world", xmlns: "http://www.w3.org/2000/svg", version: "1.1", viewBox: "0 0 1024 768", shapeRendering: "optimizeSpeed", style: style },
            React.createElement(Defs_1.default, null),
            React.createElement(ScreenContainer_1.default, null),
            React.createElement(PlayerContainer_1.default, null)));
    }
}
exports.default = World;
