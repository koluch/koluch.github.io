/**
 * Created by koluch on 01/08/15.
 */

"use strict";

define(["libs/react"], function (React) {

    return React.createClass({
        getInitialState: function getInitialState() {
            return {
                zoom: 16,
                centerShiftX: 0,
                centerShiftY: 0,
                draging: false
            };
        },

        componentDidMount: function componentDidMount() {

            //todo: BAD!
            window.addEventListener('mousemove', (function (e) {
                if (e.target != this.getDOMNode() && this.state.draging) {
                    this.setState(React.addons.update(this.state, {
                        draging: { $set: false },
                        dragingStartX: { $set: undefined },
                        dragingStartY: { $set: undefined }
                    }));
                }
            }).bind(this));

            this.redraw();
        },

        redraw: function redraw() {
            var stepAxisColor = "#EEEEEE";
            var bgColor = "#FFFFFF";
            var axisColor = "#000000";

            var params = this.calculateParams();

            var ctx = this.getDOMNode().getContext("2d");

            ctx.lineWidth = 1;

            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, params.width, params.height);

            // Draw steps
            ctx.strokeStyle = stepAxisColor;
            var line, i;
            for (i = params.centerX + params.stepX; i < params.width; i += params.stepX) {
                line = new Path2D();
                line.moveTo(i, 0);
                line.lineTo(i, params.height);
                ctx.stroke(line);
            }
            for (i = params.centerX - params.stepX; i > 0; i -= params.stepX) {
                line = new Path2D();
                line.moveTo(i, 0);
                line.lineTo(i, params.height);
                ctx.stroke(line);
            }

            for (i = params.centerY + params.stepY; i < params.height; i += params.stepY) {
                line = new Path2D();
                line.moveTo(0, i);
                line.lineTo(params.width, i);
                ctx.stroke(line);
            }
            for (i = params.centerY - params.stepY; i > 0; i -= params.stepY) {
                line = new Path2D();
                line.moveTo(0, i);
                line.lineTo(params.width, i);
                ctx.stroke(line);
            }

            // Draw labels
            ctx.font = "8px sans-serif";
            ctx.fillStyle = "#BBB";
            var step,
                i = 0;
            for (i = params.centerX + params.stepX, step = 0; i < params.width; i += params.stepX) {
                ctx.fillText(step, i, params.centerY + 8);
                step++;
            }
            for (i = params.centerX - params.stepX, step = 0; i > 0; i -= params.stepX) {
                ctx.fillText("-" + step, i, params.centerY + 8);
                step++;
            }

            for (i = params.centerY + params.stepY, step = 0; i < params.height; i += params.stepY) {
                ctx.fillText("-" + step, params.centerX - 10, i);
                step++;
            }
            for (i = params.centerY - params.stepY, step = 0; i > 0; i -= params.stepY) {
                ctx.fillText(step, params.centerX - 10, i);
                step++;
            }

            ctx.strokeStyle = axisColor;

            var xAxis = new Path2D();
            xAxis.moveTo(0, params.centerY);
            xAxis.lineTo(params.width, params.centerY);
            ctx.stroke(xAxis);

            var yAxis = new Path2D();
            yAxis.moveTo(params.centerX, 0);
            yAxis.lineTo(params.centerX, params.height);
            ctx.stroke(yAxis);

            this.redrawFunctions();
        },

        calculateParams: function calculateParams() {
            var width = this.getDOMNode().offsetWidth;
            var height = this.getDOMNode().offsetHeight;
            return {
                width: width,
                height: height,
                stepX: this.state.zoom,
                stepY: this.state.zoom,
                centerX: width / 2 + this.state.centerShiftX,
                centerY: height / 2 + this.state.centerShiftY
            };
        },

        redrawFunctions: function redrawFunctions() {
            var stepX = this.state.zoom;

            for (var i = 0; i < this.props.functions.length; i++) {

                var f = this.props.functions[i];
                var xvArea = this.visibleXVArea();

                var last = null;
                var dif = 5 / stepX;
                for (var x = xvArea.minX; x <= xvArea.maxX; x += dif) {
                    var next = [x, f(x)];
                    if (last) {
                        this.drawLine(last, next);
                    }
                    last = next;
                }
            }
        },

        visibleXVArea: function visibleXVArea() {

            var params = this.calculateParams();
            return {
                minX: params.centerX / params.stepX * -1,
                maxX: (this.getDOMNode().offsetWidth - params.centerX) / params.stepX
            };
        },

        drawLine: function drawLine(fromV, toV) {

            var params = this.calculateParams();

            var fromX = params.centerX + params.stepX * fromV[0];
            var fromY = params.centerY - params.stepY * fromV[1];
            var toX = params.centerX + params.stepX * toV[0];
            var toY = params.centerY - params.stepY * toV[1];

            var line = new Path2D();
            line.moveTo(fromX, fromY);
            line.lineTo(toX, toY);

            var ctx = this.getDOMNode().getContext('2d');
            ctx.strokeStyle = "#000";
            ctx.stroke(line);
        },

        realXY: function realXY(vXY) {
            return [centerX + stepX * vXY[0], centerY - stepY * vXY[1]];
        },

        onMouseDown: function onMouseDown(e) {
            this.setState(React.addons.update(this.state, {
                draging: { $set: true },
                dragingStartX: { $set: e.pageX - this.getDOMNode().offsetTop },
                dragingStartY: { $set: e.pageY - this.getDOMNode().offsetLeft }
            }));
        },

        onMouseUp: function onMouseUp() {
            if (this.state.draging) {
                this.setState(React.addons.update(this.state, {
                    draging: { $set: false },
                    dragingStartX: { $set: undefined },
                    dragingStartY: { $set: undefined }
                }));
            }
        },

        onMouseMove: function onMouseMove(e) {
            if (this.state.draging) {
                var newX = e.pageX - this.getDOMNode().offsetTop;
                var newY = e.pageY - this.getDOMNode().offsetLeft;

                this.setState(React.addons.update(this.state, {
                    centerShiftX: { $set: this.state.centerShiftX + newX - this.state.dragingStartX },
                    centerShiftY: { $set: this.state.centerShiftY + newY - this.state.dragingStartY },
                    dragingStartX: { $set: newX },
                    dragingStartY: { $set: newY }
                }), this.redraw);
            }
        },

        //Disable and enable scrolling when working with canvas
        onMouseEnter: function onMouseEnter() {
            if (window.addEventListener) {
                window.addEventListener('DOMMouseScroll', this.disableHandler, false);
            }
            window.onmousewheel = document.onmousewheel = this.disableHandler;
        },

        onMouseLeave: function onMouseLeave() {
            window.onmousewheel = document.onmousewheel = null;
        },

        disableHandler: function disableHandler(e) {
            if (e.preventDefault()) {
                e.preventDefault();
            }
            e.returnValue = false;
        },

        onWheel: function onWheel(e) {
            e = e.nativeEvent;
            if (e.wheelDelta > 0) {
                this.setState(React.addons.update(this.state, {
                    zoom: { $set: this.state.zoom * 1.25 }
                }), this.redraw);
            } else if (this.state.zoom > 5) {
                this.setState(React.addons.update(this.state, {
                    zoom: { $set: this.state.zoom / 1.25 }
                }), this.redraw);
            }
        },

        render: function render() {
            return React.createElement("canvas", {
                onMouseDown: this.onMouseDown,
                onMouseUp: this.onMouseUp,
                onMouseMove: this.onMouseMove,
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
                onWheel: this.onWheel,
                width: this.props.width,
                height: this.props.height,
                style: { margin: "40px", border: "1px solid black" }
            });
        }
    });
});
