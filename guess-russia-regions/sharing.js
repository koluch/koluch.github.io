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
 * Created: 05.07.2015 02:25
 */
sharing = new function(){

    this.parent = null;

    this.init = function(parent){

         this.parent = parent;


        // twitter loading
        !function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + '://platform.twitter.com/widgets.js';
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, 'script', 'twitter-wjs');
        parent.innerHTML = '<div class="widget" id="twitter_button_holder"></div>';


        // facebook loading
        /*parent.innerHTML += '<div class="widget" id="fb_button_holder">'
        + '<div class="fb-share-button"'
        + ' data-href="http://koluch.github.io/guess-russia-regions/"'
        + ' data-layout="button"'
        + ' data-lang="ru"></div>'
        + '<div id="fb-root"></div>'
        + '</div>';
        window.fbAsyncInit = function() {
            FB.init({
                appId      : '405695916297888',
                xfbml      : true,
                version    : 'v2.4'
            });
        };
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/ru_RU/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        ;*/



        parent.innerHTML += '<div class="widget" id="fb_button_wrapper">' +
                                '<div id="fb-root"></div>' +
                                '<button id="fb_share">Share</button>' +
                            '</div>';

        window.fbAsyncInit = function() {
            FB.init({
                appId      : '405695916297888',
                xfbml      : true,
                version    : 'v2.4'
            });
            $("#fb_share").addEventListener("click", function() {
                FB.ui({
                    method: 'feed',
                    link: 'http://koluch.github.io/guess-russia-regions/',
                    caption: 'Хорошо ли вы знаете Россию',
                    description:"Игра, в которой нужно правильно угадать расположение регионов России"
                }, function(response){});
            })
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        // VK loading
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//vk.com/js/api/share.js?90";
            js.onload  = function(){
                parent.innerHTML += '<div class="widget" id="vk_button_holder"></div>';

            };
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-share-js'));



    };


    this.updateButtons = function(guessed) {
        var resultMsg = 'Хорошо ли вы знаете Россию? Я отгадал '+language.toNum(guessed, "регион");

        // Update twitter button
        $("#twitter_button_holder").innerHTML = '<a href="https://twitter.com/share" class="twitter-share-button" data-count="none" data-lang="ru" data-text="'+resultMsg+'" data-hashtags="guess-russia-regions">Твитнуть</a>';
        twttr.widgets.load();

        // Updat VK button
        $("#vk_button_holder").innerHTML =  VK.Share.button({
            //url: 'http://mysite.com',
            title: resultMsg
            //image: 'http://mysite.com/mypic.jpg'
        }, {
            type: "round_nocount"
        })


    }
};