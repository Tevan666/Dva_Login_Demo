import React, { useEffect } from 'react';
import Graphin, { Behaviors, GraphinContext, GraphinData, Utils } from '@antv/graphin';
import iconLoader from '@antv/graphin-icons';
import { IColorProps, IRefCurrentProps } from './data';
import { DivIconData } from './compoments/registerNodeIcon';
const icons = Graphin.registerFontFamily(iconLoader);

const Color: IColorProps = {
  user: '#FF6A00',
  company: '#46a7a6',
};

const { DragCanvas, ZoomCanvas, DragNode, ActivateRelations } = Behaviors;

const GraphinMap:React.FC = () => {
  const graphinData = Utils.mock(10).tree().graphin();
  console.log(graphinData,'graphinData')
  graphinData.nodes.forEach(element => {
    element.comboId = '这个是节点'
  });
  const graphRef:any = React.createRef<IRefCurrentProps>();

  useEffect(() => {
    const {current: {graph}} = graphRef
    graph.on('node:click', (e:any) => {
      console.log(e,'e');
    })
  }, [])
  return(
  <>
    <div id='graphinNode'>
        <Graphin  ref={graphRef} data={DivIconData} height={900} layout={{type: 'graphin-force'}}/>
    </div>
  </>
  )
}

export default GraphinMap;
