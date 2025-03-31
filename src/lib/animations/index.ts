/**
 * 动画系统入口文件
 *
 * 此文件负责将分散的动画系统模块整合并导出，
 * 为应用程序提供一致的动画API
 */

// 导出常用动画组件
export { Animate } from './Animate'

// 导出核心功能
export {
  animateElement,
  batchProcessAnimations,
  cleanupResources,
  initAnimationSystem,
  resetAnimation
} from './animationCore'

// 导出React钩子
export { useAnimationSystem } from './animationHooks'

// 导出预设配置
export { ANIMATION_PRESETS } from './animationPresets'
export { AnimationProvider, useAnimationContext } from './AnimationProvider'

// 导出类型定义
export type { AnimationOptions } from './animationTypes'
