import Icons from './icons'

export interface IconProps {
  strokeColor?: string
  strokeWidth?: number
  iconSize?: string | number
  fillColor?: string
}

export type IconComponent = (props: IconProps) => React.JSX.Element

export { Icons }
export default Icons
