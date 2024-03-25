'use client';

interface HeroIconWrapperProps {
  IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconProps: React.SVGProps<SVGSVGElement>;
  onPress?: (e: React.MouseEvent) => void;
}

function HeroIconWrapper({
  IconComponent,
  iconProps,
  onPress,
}: HeroIconWrapperProps) {
  return <IconComponent {...iconProps} onClick={onPress} />;
}

export default HeroIconWrapper;
