<style scoped lang="less">
</style>

<template>
<div class='cap-inspector-panel element' data-inspector-type='element'>
    <header class='cap-inspector-panel-header cap-border-bottom'>
        <h3 class='cap-inspector-panel-header-title'>效果</h3>
    </header>
    <div class='cap-inspector-panel-inner'>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>背景</h4>
            </header>
            <div class='cap-inspector-panel-item'>
                <label>填充样式</label>
                <select name='' id=''>
                    <option value=''>无</option>
                    <option value=''>颜色</option>
                    <option value=''>渐变</option>
                    <option value=''>图像</option>
                </select>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>边框</h4>
            </header>
            <div class='cap-inspector-panel-row'>

                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='宽度'
                        :value.sync='borderWidth'
                        type='number'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='半径'
                        :value.sync='borderRadius'
                        type='number'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
            </div>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <label>样式</label>
                    <select name='' id=''>
                        <option value=''>无</option>
                        <option value=''>实线</option>
                        <option value=''>双线</option>
                        <option value=''>点线</option>
                        <option value=''>虚线</option>
                        <option value=''>凹线</option>
                        <option value=''>凸线</option>
                        <option value=''>内嵌</option>
                        <option value=''>外嵌</option>
                    </select>
                </div>
                <div class='cap-inspector-panel-item' style='display:none;'>
                    <cap-input
                        title='补白'
                        value='0'
                        type='number'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input title='颜色' :value='0' :type='color'></cap-input>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>可见</h4>
            </header>
            <div>
                <div class='cap-inspector-panel-item'>
                    <label for=''>不透明度</label>
                    <input type='range' max=100 min=0 value=100>
                    <input type='number' max=100 min=0 value=100>
                </div>
                <div class='cap-inspector-panel-item'>
                    <label for=''>显示</label>
                    <input name='cap-inspector-measure-display' type='radio'>
                    <label>显示</label>
                    <input name='cap-inspector-measure-display' type='radio'>
                    <label>隐藏</label>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>阴影</h4>
            </header>
            <div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='x'
                        :value.sync='boxShadowX'
                        type='number'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='y'
                        :value.sync='boxShadowY'
                        type='number'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='模糊度'
                        :value.sync='boxShadowBlur'
                        type='number'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input title='颜色' :value='0' :type='color'></cap-input>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>滤镜</h4>
            </header>
            <div>
                <div class='cap-inspector-panel-item'>
                    <label>应用模式</label>
                    <select name='' id=''>
                        <option value=''>前景</option>
                        <option value=''>背景</option>
                    </select>
                </div>
                <div class='cap-inspector-panel-item'>
                    <label for=''>模糊度</label>
                    <input type='range' max=20.0 min=0 value=0.00>
                    <input type='number' max=20.0 min=0 value=0.00>
                </div>
                <div class='cap-inspector-panel-item'>
                    <label for=''>棕褐色</label>
                    <input type='range' max=100 min=0 value=0>
                    <input type='number' max=100 min=0 value=0>
                </div>
                <div class='cap-inspector-panel-item'>
                    <label for=''>饱和度</label>
                    <input type='range' max=11 min=0 value=1.0>
                    <input type='number' max=11 min=0 value=1.0>
                </div>
                <div class='cap-inspector-panel-item'>
                    <label for=''>色调</label>
                    <input type='range' max=360 min=0 value=0>
                    <input type='number' max=360 min=0 value=0>
                </div>
                <div class='cap-inspector-panel-item'>
                    <label for=''>亮度</label>
                    <input type='range' max=400 min=0 value=100>
                    <input type='number' max=400 min=0 value=100>
                </div>
                <div class='cap-inspector-panel-item'>
                    <label for=''>对比度</label>
                    <input type='range' max=11 min=0 value=1 value=1.0>
                    <input type='number' max=11 min=0 value=1 value=1.0>
                </div>
                <div class='cap-inspector-panel-item'>
                    <a href='javascript:void(0);' class='cap-inspector-panel-btn'>还原默认设置</a>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>倒影</h4>
            </header>
            <div>
                <div class='cap-inspector-panel-item'>
                    <label for=''>深度</label>
                    <input type='range' max=100 min=0>
                    <input type='number' max=100 min=0>
                </div>
                <div class='cap-inspector-panel-item'>
                    <label for=''>偏移</label>
                    <input type='range' max=100 min=0>
                    <input type='number' max=100 min=0>
                </div>
            </div>
        </section>
    </div>
</div>
</template>

<script>
import CapInput from '../common/Input.vue';
import * as actions from '../../models/actions';
import { get } from '../../models/getters';

export default {
    props: ['inspector'],
    components: {
        CapInput
    },
    computed: {
        borderWidth: {
            get () {
                return this.get('element', 'border', 'width');
            },
            set (value) {
                this.set('element', 'border', 'width', value);
            }
        },
        borderRadius: {
            get () {
                return this.get('element', 'border', 'radius');
            },
            set (value) {
                this.set('element', 'border', 'radius', value);
            }
        }
    },
    vuex: {
        getters: {
            get: state => get(state)
        },
        actions: {
            set: actions.set
        }
    }
};
</script>
