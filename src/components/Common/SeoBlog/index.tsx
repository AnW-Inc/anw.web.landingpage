import * as React from 'react'

export interface ISeoBlogProps {
  id: string
  keywords: string
  metaDescription: string
  metaImage: {
    data: {
      attributes: {
        url: string
      }
    }
  }
  metaRobots: any
  metaTitle: string
}

const SeoBlog: React.FunctionComponent<ISeoBlogProps> = (props) => {
  return <></>
}

export default SeoBlog
