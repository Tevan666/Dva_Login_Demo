import React from 'react';
import Graphin, { Behaviors } from '@antv/graphin';

const graphinData = {
  // 点集
  nodes: [
    {
      id: 'node1', // String，该节点存在则必须，节点的唯一标识
      x: 100, // Number，可选，节点位置的 x 值
      y: 200, // Number，可选，节点位置的 y 值
    },
    {
      id: 'node2', // String，该节点存在则必须，节点的唯一标识
      x: 300, // Number，可选，节点位置的 x 值
      y: 200, // Number，可选，节点位置的 y 值
    },
    {
      id: 'node3', // String，该节点存在则必须，节点的唯一标识
      x: 400, // Number，可选，节点位置的 x 值
      y: 500, // Number，可选，节点位置的 y 值
    },
  ],
  // 边集
  edges: [
    {
      source: 'node1', // String，必须，起始点 id
      target: 'node2', // String，必须，目标点 id
    },
    {
      source: 'node1', // String，必须，起始点 id
      target: 'node3', // String，必须，目标点 id
    },
  ],
};
const { DragCanvas, ZoomCanvas, DragNode, ActivateRelations } = Behaviors;

const GraphinMap:React.FC = () => {

  return(
  <>
    <div id='graphinNode'>
        <Graphin data={graphinData} height={900} layout={{type: 'preset'}}/>
    </div>
  </>
  )
}

export default GraphinMap;
