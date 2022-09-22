import React, { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';


const CheckBox = ({ index, formik, set, setStep }: any) => {
    const [check, setCheck] = useState(false)
    return (
        <>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {index + 1}
            </td>
            <td className="p-6">
                <input
                    id="weight"
                    name="weight"
                    className="block w-full p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder={`${set.weight} kgs`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.weight}
                />
            </td>
            <td className="p-6">
                <input
                    id="reps"
                    name="reps"
                    className="block w-full p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder={set.reps}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.reps}
                />
            </td>
            <td className="p-6">
                {check ?
                    <div className="flex-shrink-0">
                        <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                    </div> : <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        onChange={() => {
                            formik.handleSubmit(), setCheck(true), setStep(index + 1)
                        }}
                    />}
            </td>
        </>
    )
}

export default CheckBox;
