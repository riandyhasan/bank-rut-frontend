import colors from '@src/utils/colors';
import { CSSProperties } from 'react';
import IcoMoon, { IconProps } from "react-icomoon";
import iconSet from "./selection.json";

const Icon = (props: IconProps) => <IcoMoon iconSet={iconSet} {...props} />;

const CustomIcon = ({
    name,
    size = 16,
    color = colors.white,
    style,
    onClick
  }: {
    name: string;
    size?: number;
    color?: string;
    style?: CSSProperties;
    onClick?: () => void;
  }) => {
    return <Icon icon={name} size={size} color={color} style={style} onClick={onClick}/>;
  };
  
export default CustomIcon;