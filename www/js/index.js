/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
  // Application Constructor
  initialize: function() {
    document.addEventListener(
      "deviceready",
      this.onDeviceReady.bind(this),
      false
    );
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
    this.receivedEvent("deviceready");
  },

  // Update DOM on a Received Event
  receivedEvent: function(id) {
    localStorage.setItem("smokevalue", 28);
    this.getSmokingRecord();
    setInterval(function() {
      testdection();
    }, 8000);
  },
  getSmokingRecord: function() {
    var settings = {
      async: true,
      crossDomain: true,
      url: "http://storiesgroup.com/smoke.php",
      method: "GET",
      headers: {
        "cache-control": "no-cache",
        "postman-token": "a9936ca5-53dc-09a1-938f-af80038e12dd"
      }
    };

    $.ajax(settings).done(function(response) {
      var data = JSON.parse(response);
      var $html = "";
      var latest = "";
      $.each(data, function(key, value) {
        $html +=
          "<div class='news-column' style='display: flex;height: 129px; margin-bottom: 21px;position: relative;padding: 11px;box-shadow: 4px 5px red;border: 2px solid red;'>";
        if (key == 0) {
          $html +=
            "<div style='position: absolute;z-index: 99999;background-color: red; color: #fff;font-size: 8px;padding: 2px;border-radius: 74px;top: 0px;left: 0px;'>New smoke detect</div>";
        }
        $html += "<a href='#'><img src='img/pictures/1.jpg' alt='img'></a>";
        $html += "<div style='margin-left: 13px;line-height: 21px;'>";
        $html += "<span><b>smoking item:</b>" + value.name + "</span>";
        $html += "<br/>";
        $html += "<span><b>Smoking Value:</b>" + value.value + "</span>";
        $html += "<br/>";
        $html += "<span><b>Date:</b>" + value.date + "</span>";
        $html += "<br/>";
        $html += "<span><b>Time :</b>" + value.time + "</span>";
        $html += "</div>";
        $html +=
          "<strong>location in <a href='https://www.google.com/maps?q=Comsats+Lahore+cafe,+Lda+Avenue+Phase+1+Lda+Avenue,+Lahore,+Punjab&ftid=0x3918ff1e3e74e623:0x77e25f585d755ced&hl=en-PK&gl=pk&shorturl=1'>Click Here</a></strong>";
        $html += "</div>";
        if (key == 0) {
          latest += $html;
        }
      });
      $(".latest-smoke-listing").html(latest);
      $(".smoke-listing").html($html);
    });
  }
};

app.initialize();

function testdection() {
  var settings = {
    async: true,
    crossDomain: true,
    url: "http://storiesgroup.com/smoke.php",
    method: "GET",
    headers: {
      "cache-control": "no-cache",
      "postman-token": "a9936ca5-53dc-09a1-938f-af80038e12dd"
    }
  };

  $.ajax(settings).done(function(response) {
    var data = JSON.parse(response);
    var $html = "";
    var latest = "";
    $.each(data, function(key, value) {
      $html +=
        "<div class='news-column' style='display: flex;height: 129px; margin-bottom: 21px;position: relative;padding: 11px;box-shadow: 4px 5px red;border: 2px solid red;'>";
      if (key == 0) {
        $html +=
          "<div style='position: absolute;z-index: 99999;background-color: red; color: #fff;font-size: 8px;padding: 2px;border-radius: 74px;top: 0px;left: 0px;'>New smoke detect</div>";
      }
      $html += "<a href='#'><img src='img/pictures/1.jpg' alt='img'></a>";
      $html += "<div style='margin-left: 13px;line-height: 21px;'>";
      $html += "<span><b>smoking item:</b>" + value.name + "</span>";
      $html += "<br/>";
      $html += "<span><b>Smoking Value:</b>" + value.value + "</span>";
      $html += "<br/>";
      $html += "<span><b>Date:</b>" + value.date + "</span>";
      $html += "<br/>";
      $html += "<span><b>Time :</b>" + value.time + "</span>";
      $html += "</div>";
      $html +=
        "<strong>location in <a href='https://www.google.com/maps?q=Comsats+Lahore+cafe,+Lda+Avenue+Phase+1+Lda+Avenue,+Lahore,+Punjab&ftid=0x3918ff1e3e74e623:0x77e25f585d755ced&hl=en-PK&gl=pk&shorturl=1'>Click Here</a></strong>";
      $html += "</div>";
      if (key == 0) {
        latest += $html;
      }
    });
    $(".latest-smoke-listing").html(latest);
    $(".smoke-listing").html($html);
  });
}
