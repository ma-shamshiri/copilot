import { Badge, Box, ResponsiveValue } from "@chakra-ui/react";

interface BadgesProps {
  text: string;
  textColor?: { light: string; dark: string };
  textSize?: ResponsiveValue<string>;
  backgroundColor?: { light: string; dark: string };
  fontWeight?: string;
  borderColor?: { light: string; dark: string };
  borderWidth?: string;
  borderRadius?: string;
  padding?: ResponsiveValue<string>;
  whiteSpace?: string;
}

const Badges: React.FC<BadgesProps> = ({
  text,
  textColor = { light: "#fff", dark: "#000" },
  textSize = { base: "0.7rem", lg: "0.8rem" },
  backgroundColor = { light: "#000", dark: "#fff" },
  fontWeight = "600",
  borderColor = { light: "#fff", dark: "#000" },
  borderWidth = "2px",
  borderRadius = "4rem",
  padding = { base: "0.3rem 1.5rem", md: "0.4rem 1.4rem", lg: "0.3rem 1.5rem" },
  whiteSpace = "nowrap",
}) => {
  return (
    <>
      <Badge
        className="badge_custom"
        as={Box}
        color={textColor.light}
        fontSize={textSize}
        textTransform="capitalize"
        bg={backgroundColor.light}
        fontWeight={fontWeight}
        borderWidth={borderWidth}
        borderColor={borderColor.light}
        borderRadius={borderRadius}
        padding={padding}
        whiteSpace={whiteSpace}
        _dark={{
          color: textColor.dark,
          bg: backgroundColor.dark,
          borderColor: borderColor.dark,
        }}
      >
        {text}
      </Badge>
    </>
  );
};

export default Badges;