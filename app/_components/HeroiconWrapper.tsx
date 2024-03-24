'use client';

interface HeroIconWrapperProps {
  IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconProps: React.SVGProps<SVGSVGElement>;
}

function HeroIconWrapper({ IconComponent, iconProps }: HeroIconWrapperProps) {
  return <IconComponent {...iconProps} />;
}

export default HeroIconWrapper;
