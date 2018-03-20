import DesktopMod from './Desktop/index'
import OfficepMod from './Office/index'
import FinanceMod from './Finance/index'
import AssetsMod from './Assets/index'
import OperateMod from './Operate/index'
import HiddenDangerMod from './HiddenDanger/index'
import EmergencyMod from './Emergency/index'
import SystemMod from './System/index'
export default {
  name: '',
  component:() => import('../components/pages/home/Home.vue'),
  title: '主页',
  children: [
    DesktopMod,
    OfficepMod,
    FinanceMod,
    AssetsMod,
    OperateMod,
    HiddenDangerMod,
    EmergencyMod,
    SystemMod
  ]
}