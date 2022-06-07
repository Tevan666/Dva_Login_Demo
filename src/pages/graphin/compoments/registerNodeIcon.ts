import React from "react";
import Graphin from "@antv/graphin";
import fonts from '@/assets/font.json'
import '@/assets/font.css'

const iconLoader = () => {
  return {
    fontFamily: 'iconfont',
    glyphs: fonts.glyphs
  }
}

const { fontFamily, glyphs } = iconLoader();
const icons = Graphin.registerFontFamily(iconLoader);

// 使用图标
export const DivIconData = {
  nodes: glyphs.map(glyph => {
    return {
      id: `node-${glyph.name}`,
      style: {
        icon: {
          type: 'font', // 指定图标为Font类型
          fontFamily, // 指定FontFamily
          value: icons[glyph.name], // 指定图标的值
        },
      },
    };
  }),
  edges: [

  ],
};
