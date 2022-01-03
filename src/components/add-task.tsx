import React from "react"
import { Button, Form } from "semantic-ui-react"
import { SubmitHandler, useForm } from "react-hook-form"

type FormValues = {
  title: string
  description: string
}

const AddTask = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "all",
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
    reset()
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: "25rem",
        marginRight: "4rem",
      }}
    >
      <div>
        <Form.Field>
          <label htmlFor='title'>
            Title
            <input
              id='title'
              placeholder='Enter task title'
              {...register("title", {
                required: "Required",
              })}
            />
          </label>
        </Form.Field>
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      <div>
        <Form.Field>
          <label htmlFor='description'>
            Description
            <textarea
              id='description'
              placeholder='Enter task description'
              {...register("description", {
                required: "Required",
              })}
            />
          </label>
        </Form.Field>
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      <Button type='submit' loading={isSubmitting}>
        New Task
      </Button>
    </Form>
  )
}

export default AddTask
