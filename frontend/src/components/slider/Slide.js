import React from "react";

export default function Slide() {
  return <div></div>;
}

<div class="simple-slider">
  <div class="swiper-container" style="height: 100%;">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        style="/*background: url('https://cdn.bootstrapstudio.io/placeholders/1400x800.png') center center / cover no-repeat;*/"
      >
        <div
          class="card aboutme-card"
          style="/*width: 70%;*//*bottom: 100px;*//*right: 200px;*//*height: 100%;*//*box-shadow: 0px 10px 30px rgb(98,99,101);*/background: transparent;/*border-radius: 12px;*//*margin-right: 10px;*/border: 0px solid rgb(190,24,89);"
        >
          <div
            class="card-body"
            style="height: 100%;background: white;border-radius: 15px;color: red;"
          >
            <h4 class="text-center card-title" style="color: #9e78fb;">
              Web Development
            </h4>
            <h6
              class="text-center text-muted card-subtitle mb-2"
              style="color: rgb(190,24,89);"
            ></h6>
            <p class="text-center card-text" style="color: #0d2d4a;">
              I enjoy creating things that will be viewed by millions of people
              on the web. 
            </p>
          </div>
        </div>
      </div>
      <div
        class="swiper-slide"
        style="/*background: url('https://cdn.bootstrapstudio.io/placeholders/1400x800.png') center center / cover no-repeat;*/"
      >
        <div
          class="card aboutme-card"
          style="/*width: 100%;*//*bottom: 100px;*//*right: 200px;*//*height: 100%;*//*box-shadow: 0px 10px 30px rgb(98,99,101);*//*background: transparent;*//*border-radius: 12px;*//*border: 6px solid rgb(190,24,89);*//*margin-right: 10px;*/"
        >
          <div class="card-body ncat-about">
            <h4
              class="text-center card-title"
              style="color: #9e78fb;z-index: 2;"
            >
              North Carolina A&amp;T Alum
            </h4>
            <h6
              class="text-center text-muted card-subtitle mb-2"
              style="color: #0d2d4a;"
            ></h6>
            <p class="text-center card-text" style="color: #0d2d4a;">
              Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
              odio, dapibus ac facilisis in, egestas eget quam. Donec id elit
              non mi porta gravida at eget metus.
            </p>
            <div
              class="ncat-image"
              style="position: absolute;top: 0;z-index: 1;"
            ></div>
          </div>
        </div>
      </div>
      <div
        class="swiper-slide"
        style="/*background: url('https://cdn.bootstrapstudio.io/placeholders/1400x800.png') center center / cover no-repeat;*/"
      >
        <div
          class="card aboutme-card"
          style="/*border: 6px solid #9e78fb;*//*width: 100%;*//*bottom: 100px;*//*right: 200px;*//*height: 100%;*//*box-shadow: 0px 10px 30px rgb(98,99,101);*//*background: transparent;*//*border-radius: 12px;*//*border: 6px solid rgb(190,24,89);*/"
        >
          <div class="card-body" style="height: 200px;background-color: white;">
            <h4 class="text-center card-title" style="color: #9e78fb;">
              Durham, North Carolina
            </h4>
            <h6
              class="text-center text-muted card-subtitle mb-2"
              style="color: rgb(190,24,89);"
            ></h6>
            <p class="text-center card-text" style="color: #0d2d4a;">
              Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
              odio, dapibus ac facilisis in, egestas eget quam. Donec id elit
              non mi porta gravida at eget metus.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev" style="color: white;"></div>
    <div class="swiper-button-next" style="color: white;"></div>
  </div>
</div>;
