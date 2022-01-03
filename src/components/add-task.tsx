import React from "react"
import { Button, Form } from "semantic-ui-react"
import { SubmitHandler, useForm } from "react-hook-form"
import { v4 as uuidv4 } from "uuid"

import { useAppDispatch } from "../app/hooks"
import { createTask } from "./tasksSlice"

type FormValues = {
  title: string
  description: string
}

const AddTask = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "all",
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(
      createTask({
        id: uuidv4(),
        title: data.title,
        description: data.description,
        status: "pending",
      }),
    )

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
