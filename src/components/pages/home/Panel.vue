<template lang="html">
  <div :class="'detail_panel--container ' + computed_state">
    <div v-if='isShow' :class="'detail_panel ' + computed_state">
      <div class="detail_panel--header">
        {{computed_data.title}}
        <div class="detail_panel--close_btn el-icon-error" @click='close'></div>
      </div>
      <div class="detail_panel--info">
        {{computed_data.info}}
      </div>
      <div class="detail_panel--camera__small" @click = 'focusSmall'>
        <div class="detail_panel--camera_title">监控</div>
        <div class="detail_panel--camera_content">
          <div>
            <div style="background-color:#000" >
                <video :src='computed_data.video[0]' autoplay="autoplay" loop='loop'></video>
            </div>
          </div>
          <div>
            <div style="background-color:#000">
                <video :src='computed_data.video[1]' autoplay="autoplay" loop='loop'></video>
            </div>
          </div>
          <div>
            <div style="background-color:#000">
                <video :src='computed_data.video[2]' autoplay="autoplay" loop='loop'></video>
            </div>
          </div>
          <div>
            <div style="background-color:#000">
                <video :src='computed_data.video[3]' autoplay="autoplay" loop='loop'></video>
            </div>
          </div>
        </div>

      </div>
      <div class="detail_panel--camera__main" @click = 'focusMain'>
        <div class="detail_panel--camera_title">实景</div>
        <div class="detail_panel--camera_content">
          <div style="background-color:aqua;">
              <iframe :src='computed_data.view'></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'bi-panel',
    props: ['isShow', 'type'],
    data() {
        return {

            states: {
                all: ['default', 'focus_main', 'focus_small'],
                now: 'default'
            },

            data: {
                ['blank']: {
                    title: '1',
                    info: '1',
                    video: ['1', '1', '1', '1'],
                    view: 'res',
                },
                ['收费站/管理所']: {
                    title: '管理所名字',
                    info: `WebAssembly, 简称WASM, 是一种以安全有效的方式运行可移植程序的新技术，主要针对Web平台。 与 ASM.js类似, WASM的目标是对高级程序中间表示的适当低级抽象，即，WebAssembly代码旨在由编译器生成而不是由人来写。 W3C 社区组 拥有来自于最大Web浏览器厂商的代表，比如Google, Microsoft, Apple 和 Mozilla ，非常令人期待。`,
                    video: [
                        window.STATIC_URL + 'res/File/station1.mp4',
                        window.STATIC_URL + 'res/File/station2.mp4',
                        window.STATIC_URL + 'res/File/station3.mp4',
                        window.STATIC_URL + 'res/File/station4.mp4'
                    ],
                    view: window.STATIC_URL + 'res/Index.html',
                },
                ['隧道']: {
                    title: '管理所名字',
                    info: `WebAssembly, 简称WASM, 是一种以安全有效的方式运行可移植程序的新技术，主要针对Web平台。 与 ASM.js类似, WASM的目标是对高级程序中间表示的适当低级抽象，即，WebAssembly代码旨在由编译器生成而不是由人来写。 W3C 社区组 拥有来自于最大Web浏览器厂商的代表，比如Google, Microsoft, Apple 和 Mozilla ，非常令人期待。`,
                    video: [
                        window.STATIC_URL + 'res/File/station1.mp4',
                        window.STATIC_URL + 'res/File/station2.mp4',
                        window.STATIC_URL + 'res/File/station3.mp4',
                        window.STATIC_URL + 'res/File/station4.mp4'
                    ],
                    view: window.STATIC_URL + 'res/Index.html',
                },
                ['桥梁']: {
                    title: '管理所名字',
                    info: `WebAssembly, 简称WASM, 是一种以安全有效的方式运行可移植程序的新技术，主要针对Web平台。 与 ASM.js类似, WASM的目标是对高级程序中间表示的适当低级抽象，即，WebAssembly代码旨在由编译器生成而不是由人来写。 W3C 社区组 拥有来自于最大Web浏览器厂商的代表，比如Google, Microsoft, Apple 和 Mozilla ，非常令人期待。`,
                    video: [
                        window.STATIC_URL + 'res/File/station1.mp4',
                        window.STATIC_URL + 'res/File/station2.mp4',
                        window.STATIC_URL + 'res/File/station3.mp4',
                        window.STATIC_URL + 'res/File/station4.mp4'
                    ],
                    view: window.STATIC_URL + 'res/Index.html',
                }

            }
        }
    },
    computed: {
        computed_state() {
            return this.states.all.reduce(
                (res, val) => (val == this.states.now ? this.states.now : res), 'defult')
        },
        computed_data() {
            return this.data[this.type] ? this.data[this.type] : this.data['blank']
        }
    },
    methods: {
        close() {
            this.$emit('close')
        },
        focusMain() {
            if (this.states.now !== 'focus_main') this.states.now = 'focus_main'
            else this.states.now = 'default'
        },
        focusSmall() {
            this.console()

            if (this.states.now !== 'focus_small') this.states.now = 'focus_small'
            else this.states.now = 'default'
        },
        console() {
            console.log(this.type)
        }
    }

}
</script>

<style lang="scss" scoped>
// $background: linear-gradient(to right, #242e3a, #242e3a); // 背景色
$background: #262d35;
$font_color: #fff;

$head_height: 48px;
$head_font_size: 20px;

$title_height: 40px;
$head_font_size: 16px;

$space: 4px;
$outer_space: 16px;

$main_video_height: 270px;
$main_video_width: 480px;
$small_video_height: 87px;
$small_video_width: 117px;

.detail_panel--container {
    position: absolute;
    top: $outer_space;
    right: $outer_space;
    height: 100%;
    max-height: 600px;
    width: $main_video_width+2*$space;
    transition: all 0.3s ease-out;

    * {
        transition: all 0.3s ease-out;
    }

    &.focus_main {
        width: 100%;
        max-height: 100%;
        top: 0;
        right: 0;

        .detail_panel {
            top: $outer_space;
            bottom: $outer_space;
            left: $outer_space;
            right: $outer_space;
            padding: $space;

            .detail_panel--header,
            .detail_panel--camera__small,
            .detail_panel--info {
                opacity: 0;
            }

            .detail_panel--camera__main {
                bottom: $space;
                height: 100%;
                padding: {
                    top: $title_height+$space;
                }

                .detail_panel--camera_title {
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: $space;
                }

                .detail_panel--camera_content,
                .detail_panel--camera_content > div {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    &.focus_small {
        width: 100%;
        max-height: 100%;
        top: 0;
        right: 0;

        .detail_panel {
            top: $outer_space;
            bottom: $outer_space;
            left: $outer_space;
            right: $outer_space;
            padding: $space;

            .detail_panel--header,
            .detail_panel--camera__main,
            .detail_panel--info {
                opacity: 0;
            }
            .detail_panel--camera__small {
                bottom: $space;
                bottom: 0;
                height: 100%;
                padding: {
                    top: $title_height+$space;
                    bottom: $space;
                }
                .detail_panel--camera_title {
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: $space;
                }
                .detail_panel--camera_content {
                    width: 100%;
                    height: 100%;
                }
                .detail_panel--camera_content > div {
                    width: 50%;
                    height: 50%;
                    margin: 0 !important;
                    padding: $space;
                }
            }
        }
    }

    .detail_panel {
        position: absolute;
        background: $background;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.6);
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        padding: $space;

        .detail_panel--header {
            height: $head_height;
            font-size: 20px;
            font-weight: bold;
            color: $font_color;
            line-height: $head_height;
            text-align: left;
            padding-left: 2px;

            .detail_panel--close_btn {
                position: absolute;
                right: 18px;
                top: 18px;
            }

            .detail_panel--close_btn:hover {
                color: rgba(255, 255, 255, 0.7);
            }
        }
        .detail_panel--camera__main {
            position: absolute;
            bottom: $space;
            height: $main_video_height+$title_height;
            left: $space;
            right: $space;
            margin-top: 2*$space;
            .detail_panel--camera_content div {
                height: $main_video_height;
                width: $main_video_width;
            }
        }

        .detail_panel--camera__small {
            position: absolute;
            bottom: $main_video_height+$title_height+2*$space;
            height: $small_video_height+$title_height+2*$space;
            left: $space;
            right: $space;
            margin-top: 2*$space;
            .detail_panel--camera_content > div {
                height: $small_video_height;
                width: $small_video_width;
                float: left;
                margin: $space $space $space 0;

                &:last-child {
                    margin: $space 0 $space 0;
                }
                div {
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .detail_panel--camera_title {
            height: $title_height;
            line-height: $title_height;
            font-size: $head_font_size;
            text-align: left;
            color: $font_color;
            padding-left: 2px;
        }

        .detail_panel--info {
            position: absolute;
            top: $head_height+$space;
            padding: 0 4px;
            bottom: $main_video_height+$small_video_height+2*(
                    3*$space+$title_height
                );
            overflow: auto;
            color: $font_color;
        }
    }
}
video,
iframe {
    width: 100%;
    height: 100%;
}
</style>
