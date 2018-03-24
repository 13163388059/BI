<template>
    <div class="container" :style="_outerStyle">
        <div class="item">
            <div class="block" :style='innerStyle'>
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
        'float'],
    computed: {
        _outerStyle() {
            return Object.assign(
                this.outerStyle ? this.outerStyle : {},
                {
                    width: this.w ? this.w : '100%',
                    height: this.h ? this.h : '100%',
                    float: this.float ? this.float : 'left',
                })
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
</style>
