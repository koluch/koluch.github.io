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
        parent.innerHTML += '<div class="widget">'
        + '<div class="fb-share-button"'
        + ' data-href="https://www.facebook.com/v2.2/dialog/feed?app_id=45075597673&description=I%20got%201%2F50%20right%20%E2%80%93%20can%20you%20do%20any%20better%3F&display=popup&e2e=%7B%7D&link=http%3A%2F%2Fbuzzfeed.com%2Frobinedds%2Fhow-well-do-you-actually-know-the-us-states&locale=en_US&name=How%20Well%20Do%20You%20Actually%20Know%20The%20US%20States%3F&next=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter%2FxRlIuTsSMoE.js%3Fversion%3D41%23cb%3Df1e385bafc%26domain%3Dgames.buzzfeed.com%26origin%3Dhttp%253A%252F%252Fgames.buzzfeed.com%252Ff39a53ca78%26relation%3Dopener%26frame%3Df12974aaf8%26result%3D%2522xxRESULTTOKENxx%2522&picture=http%3A%2F%2Fgames.buzzfeed.com%2F_uk%2Fstate-quiz%2Fimg%2Fflags%2Fflagresult1.jpg&sdk=joey&version=v2.2"'
        + ' data-layout="button"></div>'
        + '<div id="fb-root"></div>'
        + '</div>';
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));


        /*parent.innerHTML += '<div class="widget" id="fb_button_wrapper">' +
                                '<div id="fb-root"></div>' +
                                '<button id="fb_share">Share</button>' +
                            '</div>';

        window.fbAsyncInit = function() {
            FB.init({
                appId      : '145634995501895',
                xfbml      : true,
                version    : 'v2.3'
            });
            $("#fb_share").addEventListener("click", function() {
                FB.ui({
                    method: 'feed',
                    link: 'https://developers.facebook.com/docs/',
                    caption: 'An example caption',
                }, function(response){});
            })
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));*/

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
        var resultMsg = 'Хорошо ли ты знаешь Россию? Я отгадал '+language.toNum(guessed, "регион");
        $("#twitter_button_holder").innerHTML = '<a href="https://twitter.com/share" class="twitter-share-button" data-count="none" data-text="'+resultMsg+'" data-hashtags="guess-russia-regions">Tweet</a>';
        twttr.widgets.load();

        $("#vk_button_holder").innerHTML =  VK.Share.button({
            //url: 'http://mysite.com',
            title: resultMsg
            //image: 'http://mysite.com/mypic.jpg'
        }, {
            type: "round_nocount"
        })


    }
};