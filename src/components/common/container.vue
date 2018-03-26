<template>
    <div class="container" :style="_outerStyle" >
        <div class="item">
            <div :class="blockClass" :style='innerStyle'>
                <slot />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'bi-container',
    props: [
        'innerStyle',
        'outerStyle',
        'w',
        'h',
        'float',
        'color'
        ],
    computed: {
        _outerStyle() {
            return Object.assign(
                this.outerStyle ? this.outerStyle : {},
                {
                    width: this.w ? this.w : '100%',
                    height: this.h ? this.h : '100%',
                    float: this.float ? this.float : 'left',
                })
        },

        blockClass(){
            console.log(this.color)
            if (!this.color) return 'block'

            return 'block color color'+this.color
        }
    }
}
</script>


<style scoped>
.container {
    float: left;
    position: relative;
}

.padding {
    padding: 8px;
}

.item {
    width: 100%;
    height: 100%;
    padding: 8px;
}

.item > div {
    width: 100%;
    height: 100%;
}

.block {
    background-color: rgba(45, 55, 70, 0.6);
    border-radius: 0px;
    position: relative;
}

.color::after {
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
}

.color1::after {
    background: linear-gradient(to right, #898579, #898579);
}
.color2::after {
    background: linear-gradient(to right, #4e3956, #392b3c);
}
.color3::after {
    background: linear-gradient(to right, #684c58, #684c58);
}
.color4::after {
    background: linear-gradient(to right, #898579, #898579);
}
</style>
