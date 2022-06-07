export interface IColorProps {
  user: string;
  company: string;
  [type: string]: string
}

export interface IGraphRefProps {
    graph: {
      on: (event: string, evt?: string) => void;
    }
}

export interface IRefCurrentProps {
  current: IGraphRefProps;
}
