"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("React");
const Direction_1 = require("../Direction");
const PlayerSVG_1 = require("./SVG/PlayerSVG");
class Player extends React.Component {
    constructor() {
        super(...arguments);
        this.keysDown = {};
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown.bind(this));
        document.addEventListener("keyup", this.handleKeyUp.bind(this));
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
        document.removeEventListener("keyup", this.handleKeyDown);
    }
    render() {
        let left = this.props.position[0];
        if (this.props.displayDirection === Direction_1.default.Left) {
            left += 64; // Offset matrix flip
        }
        const top = -this.props.position[1];
        const scaleFactor = 0.285;
        const scaleX = scaleFactor * (this.props.displayDirection === Direction_1.default.Left ? -1 : 1);
        const scaleY = scaleFactor;
        return React.createElement("g", { transform: 'translate(' + left + ' ' + (top - 10) + ') scale(' + scaleX + ', ' + scaleY + ')' }, PlayerSVG_1.default());
    }
    handleKeyDown(e) {
        const direction = this.getDirection(e);
        if (direction !== null) {
            this.props.move(direction);
        }
        else if (e.keyCode === 32) {
            this.props.jump();
        }
    }
    handleKeyUp(e) {
        const direction = this.getDirection(e);
        if (direction === this.props.displayDirection) {
            this.props.move(null);
        }
    }
    getDirection(e) {
        switch (e.keyCode) {
            case 37:
                return Direction_1.default.Left;
            case 39:
                return Direction_1.default.Right;
            default:
                return null;
        }
    }
}
exports.default = Player;
