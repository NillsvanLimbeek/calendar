import React from 'react';
import { Form, Formik } from 'formik';

import { SetErrors } from '../../lib/types';

import { InputField } from '../InputField';

interface AddEvent {
    title: string;
}

export const AddEvent = () => {
    const handleSumbit = (values: AddEvent, setErrors: SetErrors<AddEvent>) => {
        console.log({ values, setErrors });
    };

    return (
        <Formik
            initialValues={{ title: '' }}
            onSubmit={(values, { setErrors }) =>
                handleSumbit(values, setErrors)
            }
        >
            {() => (
                <Form>
                    <InputField label="Title" name="title" required />
                    <InputField label="Start" name="start" required />
                    <InputField label="End" name="end" required />

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 hover:bg-blue-700 rounded-sm mt-4"
                    >
                        Add Event
                    </button>
                </Form>
            )}
        </Formik>
    );
};
