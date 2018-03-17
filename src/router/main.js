import OAMod from './OA/index'
import ZGMod from './ZG/index'
import RLMod from './RL/index'
import FWMod from './FW/index'
import YHMod from './YH/index'
import YYMod from './YY/index'
import CWMod from './CW/index'
import YJMod from './YJ/index'
import ZCMod from './ZC/index'

export default {
  name: '',
  component: () =>
    import ('../components/pages/home/Home.vue'),
  title: '主页',
  children: [
    OAMod,
    ZGMod,
    RLMod,
    FWMod,
    YHMod,
    YYMod,
    CWMod,
    YJMod,
    ZCMod
  ]
}