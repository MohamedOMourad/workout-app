import React from 'react'

const PersonalRecordsCard = ({ personalRecords }: any) => {
    return (
        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {personalRecords?.map((record: any) => (
                <div key={record.id} className="overflow-hidden rounded-lg bg-white shadow">
                    <div  className="p-5">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="truncate text-sm font-medium text-gray-500">{record.exercise.name}</dt>
                                    <dd>
                                        <div className="text-lg font-medium text-gray-900">{record.users[0].weight}</div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-5 py-3">
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PersonalRecordsCard;
