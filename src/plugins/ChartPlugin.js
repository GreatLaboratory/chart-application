import Chart from 'chart.js'

// 컴포넌트 마다 chart.js 패키지를 로딩하지 않기위해 플러그인 생성
export default {
    install(Vue) {
        Vue.prototype.$_Chart = Chart;
    }
}