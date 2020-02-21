import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({ defaultValues, children, onSubmit }) => {
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    watch,
    control,
  } = useForm({
    defaultValues,
  })
  console.log('TCL: Form -> control', control)
  console.log('errors', errors)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map(child => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register: register,
                    key: child.props.name,
                    error: errors[child.props.name],
                    setValue: value =>
                      setValue(child.props.name, value),
                    watch: watch,
                    control: control,
                  },
                })
              : child
          })
        : children}
    </form>
  )
}

export default Form
