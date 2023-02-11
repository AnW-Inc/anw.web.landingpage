import * as React from 'react'
import { SubmitHandler } from 'react-hook-form'

interface ICustomFormProps {
  children: JSX.Element[]
  onSubmit: SubmitHandler<any>
  register: any
  formState: any
}

const CustomForm: React.FunctionComponent<ICustomFormProps> = (props) => {
  const {
    children,
    onSubmit,
    register,
    formState: { errors },
  } = props

  return (
    <form onSubmit={onSubmit}>
      {Array.isArray(children)
        ? children.map((child: any) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    errors,
                    key: child.props.name,
                  },
                })
              : child
          })
        : children}
    </form>
  )
}

export default CustomForm
