<style scoped lang='less'>
.cap-preview {
    display: flex;
    width: 100%;
    height: 100%;

    .cap-scene-outer {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-around;
        z-index: 1;
    }

    .cap-inspector-outer {
        flex: 0 0 300px;
        z-index: 2;
        height: 100%;
    }
}

</style>

<template>
    <div class="cap-preview">
        <div class="cap-scene-outer">
            <scene></scene>
        </div>
        <div class="cap-inspector-outer">
            <inspector></inspector>
        </div>
    </div>
</template>

<script>
import Scene from './Scene.vue';
import Inspector from './Inspector.vue';
import store from '../models/store';

export default {
    components: {
        Scene,
        Inspector
    },
    store
};
</script>
