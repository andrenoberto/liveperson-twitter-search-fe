export interface LocalIconDefinition {
  prefix: string;
  iconName: string;
  icon: [
    number, // width
    number, // height
    string[], // ligatures
    string, // unicode
    string, // svgPathData
  ];
}