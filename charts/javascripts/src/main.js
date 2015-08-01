/**
 * --------------------------------------------------------------------
 * Copyright 2015 Nikolay Mavrenkov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * --------------------------------------------------------------------
 *
 * Author:  Nikolay Mavrenkov <koluch@koluch.ru>
 * Created: 01.08.2015 12:45
 */
requirejs.config({
    baseUrl: "javascripts/build",
    paths: {
        "libs/react": "../libs/react-0.13.3/build/react-with-addons"
    }
});


require(["libs/react", "components/Field"], function(React, Field){

    Array.prototype.foldl = function (acc, f) {
        for (var i = 0; i < this.length; i++) {
            acc = f(acc, this[i])
        }
        return acc;
    };





    var samples = [];
    for(var i = 0; i<1000; i++) {
        if(i>500) {
            samples.push(9 + 2 * Math.random())
        }
        else {
            samples.push(3 + 2 * Math.random())
        }
    }

    var h = 5;

    function ind(x) {
        return Math.abs(x) <= 1 ? 1 : 0
    }

    function uniformKernel(x) {
        return 1/2 * ind(x)
    }

    function triangularKernel(x) {
        return (1 - Math.abs(x)) * ind(x);
    }

    function epanechnikovKernel(x) {
        return 3/4 * (1 - x * x) * ind(x);
    }

    var functions = [
        function(x){ return x * x },
        function(x){
            var n = samples.length;
            var sum = samples.foldl(0, function(sum, xi){
                return sum + epanechnikovKernel ((x - xi)/h)
            });
            var result = sum / (n * h);
            return result
        }
    ];

    React.render(
        <Field width="1500" height="400" functions={functions} />,
        document.getElementById("canvas_holder")
    )
});