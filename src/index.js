/*
 * @file Entrance
 * @author Bighead
 */
define(function (require) {
    var $ = window.$ = require('jquery');
    var etpl = require('etpl');
    var draggableDom = $('[data-draggable=true]');
    var sceneDom = $('.cap-scene');
    var transformTpl = '<!-- target: transformTpl -->translateX(${translateX}px) translateY(${translateY}px) scaleX(${scaleX}) scaleY(${scaleY}) skewX(${skewX}) skewY(${skewY}) rotate(${rotate})';


    function matrix2kv(matrixString) {
        var matrixArray = matrixString.replace(/matrix\(|\)/g, '').split(',');
        var rotate = Math.atan2(matrixArray[1], matrixArray[0]);
        var quadraticSum = Math.pow(matrixArray[0], 2) + Math.pow(matrixArray[1], 2);
        var scaleX = Math.sqrt(quadraticSum);
        var scaleY = (matrixArray[0] * matrixArray[3] - matrixArray[2] * matrixArray[1]) / scaleX;
        var skewX = Math.atan2(matrixArray[0] * matrixArray[2] + matrixArray[1] * matrixArray[3], quadraticSum);


        return {
            rotate: rotate / (Math.PI / 180),
            scaleX: scaleX,
            scaleY: scaleY,
            skewX: skewX / (Math.PI / 180),
            skewY: 0,
            translateX: +matrixArray[4].trim(),
            translateY: +matrixArray[5].trim()
        };
    }

    sceneDom.on('mousedown', function (event) {

        var target = event.target;
        var $target = $(target);

        if (!$target.data('draggable')) {
            return;
        }

        var mouseX = event.clientX;
        var mouseY = event.clientY;

        draggableDom.addClass('cap-element-static');
        $target.removeClass('cap-element-static');

        this.beginMousePosition = {
            x: mouseX,
            y: mouseY
        };

        var a = matrix2kv($target.css('transform'));

        this.beginDomPosition = {
            x: a.translateX,
            y: a.translateY
        };

        this.activeSymbol = target;

    });

    sceneDom.on('mousemove', function (event) {

        var $target = $(this.activeSymbol);

        if (!this.beginMousePosition) {
            return;
        }
        var mouseX = event.clientX;
        var mouseY = event.clientY;
        var offsetMousePosition = {
            x: mouseX - this.beginMousePosition.x,
            y: mouseY - this.beginMousePosition.y
        };
        // console.log(offsetMousePosition);
        // var offsetY = clientY - this.capClientY;

        var a = matrix2kv($target.css('transform'));
        a.translateX = this.beginDomPosition.x + offsetMousePosition.x;
        a.translateY = this.beginDomPosition.y + offsetMousePosition.y;
        $target.css('transform', etpl.render('transformTpl', a));
        // console.log(etpl.render('transformTpl', a));
    });

    sceneDom.on('mouseup', function (event) {

        this.beginMousePosition = null;
        this.beginDomPosition = null;

        draggableDom.removeClass('cap-element-static');
    });

    function init() {
        etpl.compile(transformTpl);
    }

    return {
        init: init
    };
});