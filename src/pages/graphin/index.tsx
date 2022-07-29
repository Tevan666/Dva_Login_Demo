import React, { useEffect } from 'react';
import Graphin, { Behaviors, GraphinContext, GraphinData, Utils } from '@antv/graphin';
import iconLoader from '@antv/graphin-icons';
import { IColorProps, IRefCurrentProps } from './data';
import { DivIconData } from './compoments/registerNodeIcon';

const { DragCanvas, ZoomCanvas, DragNode, ActivateRelations } = Behaviors;

const GraphinMap:React.FC = () => {
  const graphinData = Utils.mock(10).tree().graphin();
  console.log(graphinData,'graphinData')
  graphinData.nodes.forEach(element => {
    element.comboId = '这个是节点'
  });
  const graphRef:any = React.createRef<IRefCurrentProps>();
  DivIconData.nodes.push({
    id: '1',
    type: 'image',
    label: '这个是节点',
    img: 'https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg?max_age=31536000',
    size: '200',
    labelCfg: {
      position: 'bottom'
    },
    clipCfg: {
      show: true,
      type: 'circle',
      circle: 100,
      r: 100,
    },
  },
  {
    id: 'node0',
  	img: 'https://s1.328888.xyz/2022/06/08/zaz7v.jpg',
    type: 'image',
    size: 200,
    label: 'AntV Team',
    labelCfg: {
      position: 'bottom'
    },
    // 裁剪图片配置
    clipCfg: {
      show: true,
      type: 'circle',
      r: 100
    }
  },)
  console.log(DivIconData,'DivIconData')

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
