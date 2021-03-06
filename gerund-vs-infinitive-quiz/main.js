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
 * Created: 03.09.2015 02:15
 */

var data = [
    {text: "It's important $1 team meetings", options:[{text:"attending", right:false}, {text:"to attend", right:true}]}
    ,{text: "He went to work despite $1 unwell", options:[{text:"feeling", right:true}, {text:"fill", right:false}]}
    ,{text: "$1 makes you fit", options:[{text:"Swimming", right:true}, {text:"Swimm", right:false}]}
    ,{text: "They left without $1 “good-bye”", options:[{text:"saying", right:true}, {text:"say", right:false}]}
    ,{text: "You shouldn’t $1 so much coffee", options:[{text:"drinking", right:false}, {text:"drink", right:true}]}
    ,{text: "Can you $1 me a bit later", options:[{text:"call", right:true}, {text:"calling", right:false}]}


    // Just word with gerunds
    ,{text: "Davis admitted $1 death by careless driving", options:[{text:"causing", right:true}, {text:"cause", right:false}]}
    ,{text: "I don't appreciate $1 treated like a second-class citizen", options:[{text:"being", right:true}, {text:"be", right:false}]}
    ,{text: "Please, try to avoid $1 people", options:[{text:"killing", right:true}, {text:"to kill", right:false}]}
    ,{text: "We're considering $1 a new car", options:[{text:"buying", right:true}, {text:"to buy", right:false}]}
    ,{text: "Please excuse my delay in $1", options:[{text:"replying", right:true}, {text:"reply", right:false}]}
    ,{text: "He still denies $1 his wife", options:[{text:"murdering", right:true}, {text:"to murder", right:false}]}
    ,{text: "Cats dislike $1 their fur wet", options:[{text:"getting", right:true}, {text:"to get", right:false}]}
    ,{text: "I don’t enjoy $1 on holiday as much as I used to", options:[{text:"going", right:true}, {text:"to go", right:false}]}
    ,{text: "He narrowly escaped $1 killed", options:[{text:"being", right:true}, {text:"to be", right:false}]}
    ,{text: "His excuse for $1 her birthday was that he had lost his diary", options:[{text:"forgetting", right:true}, {text:"forget", right:false}]}
    ,{text: "He couldn't face $1 all the way to Los Angeles", options:[{text:"driving", right:true}, {text:"to drive", right:false}]}
    ,{text: "Do you fancy $1 out this evening", options:[{text:"going", right:true}, {text:"go", right:false}]}
    ,{text: "Do you feel like $1 for a swim?", options:[{text:"going", right:true}, {text:"to go", right:false}]}
    ,{text: "She had just finished $1 the children when the phone rang.", options:[{text:"dressing", right:true}, {text:"to dress", right:false}]}
    ,{text: "You ought to give up $1", options:[{text:"smoking", right:true}, {text:"to smoke", right:false}]}
    ,{text: "I couldn’t help $1 he was asking for trouble", options:[{text:"thinking", right:true}, {text:"to think", right:false}]}
    ,{text: "Imagine yourself $1 behind your big new desk.", options:[{text:"sitting", right:true}, {text:"sit", right:false}]}
    ,{text: "The job involved $1 with a software development team.", options:[{text:"working", right:true}, {text:"to work", right:false}]}
    ,{text: "My sister kept on $1 me question after question", options:[{text:"asking", right:true}, {text:"to ask", right:false}]}
    ,{text: "He mentioned $1 to the gym earlier in the day", options:[{text:"going", right:true}, {text:"to go", right:false}]}
    ,{text: "Did you mind $1 away from home for so long?", options:[{text:"being", right:true}, {text:"to be", right:false}]}
    ,{text: "We miss $1 her ride her horse", options:[{text:"watching", right:true}, {text:"watch", right:false}]}
    ,{text: "It was an unpopular decision to postpone $1 the new hospital.", options:[{text:"building", right:true}, {text:"to build", right:false}]}
    ,{text: "Today we're going to practise $1", options:[{text:"parking", right:true}, {text:"to park", right:false}]}
    ,{text: "All this rain really puts you off $1 out after work", options:[{text:"going", right:true}, {text:"to go", right:false}]}
    ,{text: "I don’t recall $1 the document", options:[{text:"seeing", right:true}, {text:"to see", right:false}]}
    ,{text: "They may even risk $1 their homes", options:[{text:"losing", right:true}, {text:"to lose", right:false}]}
    ,{text: "Joan suggested $1 her father for his opinion", options:[{text:"asking", right:true}, {text:"to ask", right:false}]}

    // Some words with infinitives
    ,{text: "We can’t afford $1 on vacation this year", options:[{text:"to go", right:true}, {text:"going", right:false}]}
    ,{text: "No one really knows why he agreed $1 the film", options:[{text:"to do", right:true}, {text:"doing", right:false}]}
    ,{text: "The survey appears $1 motor industry claims", options:[{text:"to contradict", right:true}, {text:"contradicting", right:false}]}
    ,{text: "Have you arranged $1 Mark this weekend?", options:[{text:"to meet", right:true}, {text:"meeting", right:false}]}
    ,{text: "Karen asked $1 the doctor", options:[{text:"to see", right:true}, {text:"seeing", right:false}]}
    ,{text: "In this chapter I will attempt $1 what led up to the revolution", options:[{text:"to explain", right:true}, {text:"explaining", right:false}]}
    ,{text: "I wouldn’t care $1 him in a dark alley!", options:[{text:"to meet", right:true}, {text:"meeting", right:false}]}
    ,{text: "I chose $1 German rather than French", options:[{text:"to learn", right:true}, {text:"learning", right:false}]}
    ,{text: "Tina's decided $1 to Rome for her holidays", options:[{text:"to go", right:true}, {text:"going", right:false}]}
    ,{text: "I expect $1 back within a week", options:[{text:"to be", right:true}, {text:"being", right:false}]}
    ,{text: "Doctors failed $1 the girl's life", options:[{text:"to save", right:true}, {text:"saving", right:false}]}
    ,{text: "I happened $1 James in town", options:[{text:"to see", right:true}, {text:"seeing", right:false}]}
    ,{text: "I helped her $1 her cases up the stairs", options:[{text:"to carry", right:true}, {text:"carring", right:false}]}
    ,{text: "He hopes $1 his art to a major museum", options:[{text:"to sell", right:true}, {text:"selling", right:false}]}
    ,{text: "I learnt $1 when I was 17", options:[{text:"to drive", right:true}, {text:"driving", right:false}]}
    ,{text: "How do you manage $1 so slim", options:[{text:"to stay", right:true}, {text:"staing", right:false}]}
    ,{text: "I didn’t mean $1 you", options:[{text:"to upset", right:true}, {text:"upsetting", right:false}]}
    ,{text: "My dad has offered $1 us up", options:[{text:"to pick", right:true}, {text:"picking", right:false}]}
    ,{text: "She closed her eyes and pretended $1 asleep", options:[{text:"to be", right:true}, {text:"being", right:false}]}
    ,{text: "Peter wished he’d never promised $1 them", options:[{text:"to help", right:true}, {text:"helping", right:false}]}
    ,{text: "I absolutely refuse $1 part in anything illegal", options:[{text:"to take", right:true}, {text:"taking a", right:false}]}
    ,{text: "The rainbow seemed $1 on the hillside", options:[{text:"to end", right:true}, {text:"ending", right:false}]}
    ,{text: "You want $1 a doctor about that cough", options:[{text:"to see", right:true}, {text:"seeing", right:false}]}
    ,{text: "Please do not hesitate to contact me if you wish $1 the matter", options:[{text:"to discuss", right:true}, {text:"discussing", right:false}]}

    // Both
    ,{text: "It has started $1", options:[{text:"raining", right:true}, {text:"to rain", right:true}]}
    ,{text: "Do you like $1?", options:[{text:"dancing", right:true}, {text:"to dance", right:true}]}
    ,{text: "Do you prefer $1 a hard tasks?", options:[{text:"having", right:true}, {text:"to have", right:true}]}

];



$(function(){

    function makeRandomIteratorInf(arr) {
        var last = 0;
        return {
            next: function(){
                if(arr.length==0) throw Error("empty array");
                if(arr.length==1) return arr[0];
                var i = last;
                while(i == last) {
                    i = Math.floor(Math.random() * arr.length);
                }
                last = i;
                return arr[i];
            },
            hasNext: function(){
                return true;
            }
        }
    }

    function makeRandomIterator(arr) {
        var rest = arr.slice();
        return {
            next: function(){

                var i = Math.floor(Math.random() * rest.length);
                var next = rest[i];
                rest.splice(i, 1);
                return next;
            },
            hasNext: function() {
                return rest.length > 0;
            }
        }
    }

    function showState(state) {
        $("#state .left").text(state.rest.length);
        $("#state .errors").text(state.errors);
    }


    function begin() {
        var state = {
            rest: data.slice(),
            errors: 0
        };
        $("#sentence").show();
        nextQuestion(state);
    }

    function end() {
        $("#sentence").hide();
        var $tryAgainButton = $("<button>Try again</button>");
        $("#buttons").empty().append($tryAgainButton);
        $tryAgainButton.click(function(){
            begin();
        })
    }

    function wrongAnswer(rightOption, state) {
        var $tryAgainButton = $("<button>Next question</button>");
        $("#buttons").empty().append($tryAgainButton);
        $tryAgainButton.click(function(){
            nextQuestion(state);
        });
        var $replacer = $("#sentence").find(".replacer");
        $replacer.text(rightOption.text);
        $replacer.addClass("error");
    }


    function nextQuestion(state){

        console.log(state.rest);
        
        showState(state);

        if(state.rest.length>0) {
            var i = Math.floor(Math.random() * state.rest.length);

            var question = state.rest[i];

            var textParts = question.text.split("$1");
            var $sentence = $("#sentence");
            var $replacer = $("<span class='replacer'>...</span>");

            $sentence.empty();
            $sentence.append($("<span>" + textParts[0] + "</span>"));
            $sentence.append($replacer);
            $sentence.append($("<span>" + textParts[1] + "</span>"));

            var $buttons = $("#buttons");
            $buttons.empty();

            var options = question.options.slice();

            // Create option with all options
            var allOptions = {
                text: options.map(function (x) {
                    return x.text
                }).join("/"),
                right: options.filter(function (x) {
                    return x.right
                }).length == options.length
            };
            options = options.map(function (option) {
                return {
                    text: option.text,
                    right: option.right && !allOptions.right
                }
            });
            options.push(allOptions);

            var options2 = options.slice();

            while (options.length > 0) {
                (function () {
                    var j = Math.floor(Math.random() * options.length);
                    var option = options[j];
                    var $button = $("<button/>").text(option.text);
                    $buttons.append($button);
                    $button.click(function () {
                        if (option.right) {
                            state.rest.splice(i, 1);
                            nextQuestion(state);
                        }
                        else {
                            state.errors++;

                            var rightOption = options2.filter(function (x) {return x.right})[0];
                            console.log(options);
                            wrongAnswer(rightOption, state);
                        }
                    });
                    $button.on('mouseover', function () {
                        $replacer.text(option.text);
                    });
                    $button.on('mouseleave', function () {
                        $replacer.text("...");
                    });
                    options.splice(j, 1)
                })()
            }
        }
        else {
            end();
        }
    }


    begin();





})
