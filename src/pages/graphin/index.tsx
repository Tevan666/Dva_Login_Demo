import React from 'react';
import Graphin, { Behaviors, GraphinData, Utils } from '@antv/graphin';
import iconLoader from '@antv/graphin-icons';
import { IColorProps } from './data';
const icons = Graphin.registerFontFamily(iconLoader);

const Color: IColorProps = {
  user: '#FF6A00',
  company: '#46a7a6',
};

const { DragCanvas, ZoomCanvas, DragNode, ActivateRelations } = Behaviors;

const GraphinMap:React.FC = () => {
  const graphinData = Utils.mock(10).tree().graphin();
  return(
  <>
    <div id='graphinNode'>
        <Graphin data={graphinData} height={900} layout={{type: 'graphin-force'}}/>
    </div>
  </>
  )
}

export default GraphinMap;
